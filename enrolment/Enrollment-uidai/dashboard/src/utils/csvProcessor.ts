import * as Papa from 'papaparse';
import * as _ from 'lodash';

export interface RawRecord {
  date: string;
  state: string;
  district: string;
  pincode: string;
  age_0_5: string | number;
  age_5_17: string | number;
  age_18_greater: string | number;
}

export interface ProcessedRecord {
  id: string;
  date: Date; // JS Date object
  monthYear: string; // "Jan 2024" for grouping
  state: string;
  district: string;
  pincode: string;
  age0_5: number;
  age5_17: number;
  age18Plus: number;
  total: number;
}

export interface DashboardStats {
  totalRecords: number;
  totalPopulation: number;
  avgPerDistrict: number;
  recordsByState: Record<string, number>;
  ageDistribution: {
    group: string;
    count: number;
    percentage: number;
  }[];
  monthlyTrends: {
    month: string;
    total: number;
  }[];
  stateData: {
    state: string;
    total: number;
    age0_5: number;
    age5_17: number;
    age18Plus: number;
    recordsCount: number;
  }[];
  topDistricts: {
    district: string;
    state: string;
    total: number;
  }[];
}

export const normalizeString = (str: string): string => {
  if (!str) return '';
  // Remove special characters at the end like " *"
  return str.replace(/[^a-zA-Z0-9\s]/g, '').trim();
};

export const parseDate = (dateStr: string): Date => {
  // Expecting DD-MM-YYYY
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const processCSVFiles = async (files: File[]): Promise<ProcessedRecord[]> => {
  const allRecords: ProcessedRecord[] = [];

  for (const file of files) {
    const text = await file.text();
    const result = Papa.parse<RawRecord>(text, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_'),
    });

    result.data.forEach((row: RawRecord, index: number) => {
        // Safe parsing with defaults
        const age0_5 = Number(row.age_0_5 || 0);
        const age5_17 = Number(row.age_5_17 || 0);
        const age18Plus = Number(row.age_18_greater || 0);
        
        // Skip invalid rows (e.g. total 0)
        if (age0_5 + age5_17 + age18Plus === 0) return;

        const dateObj = parseDate(row.date as string);
        const monthYear = dateObj.toLocaleString('default', { month: 'short', year: 'numeric' });
        
        // Normalize District Name ("Garhwa *" -> "Garhwa")
        // The regex in normalizeString handles ' *' removal by keeping alphanum+space
        // But let's be specific about the requirement "Garhwa *"
        let district = row.district ? String(row.district).trim() : 'Unknown';
        district = district.replace(/\*+$/, '').trim(); // specific rule for trailing asterisks

        allRecords.push({
            id: `${file.name}-${index}`,
            date: dateObj,
            monthYear,
            state: row.state ? String(row.state).trim() : 'Unknown',
            district,
            pincode: String(row.pincode),
            age0_5,
            age5_17,
            age18Plus,
            total: age0_5 + age5_17 + age18Plus,
        });
    });
  }
  return allRecords;
};

export const calculateStats = (data: ProcessedRecord[]): DashboardStats => {
  const totalPopulation = _.sumBy(data, 'total');
  const count0_5 = _.sumBy(data, 'age0_5');
  const count5_17 = _.sumBy(data, 'age5_17');
  const count18Plus = _.sumBy(data, 'age18Plus');

  // Group by State
  const stateGroups = _.groupBy(data, 'state');
  const stateData = Object.keys(stateGroups).map(state => {
      const records = stateGroups[state];
      return {
          state,
          total: _.sumBy(records, 'total'),
          age0_5: _.sumBy(records, 'age0_5'),
          age5_17: _.sumBy(records, 'age5_17'),
          age18Plus: _.sumBy(records, 'age18Plus'),
          recordsCount: records.length,
      };
  }).sort((a, b) => b.total - a.total); // Sort by total desc

  // Monthly trends (chronological)
  // We need to sort months correctly.
  const monthGroups = _.groupBy(data, (r) => {
      // Use YYYY-MM for sorting key, display key separate?
      // Simple: use date
      return `${r.date.getFullYear()}-${String(r.date.getMonth() + 1).padStart(2, '0')}`;
  });

  const monthlyTrends = Object.keys(monthGroups).sort().map(key => {
     // key is "2024-01"
     const [year, month] = key.split('-');
     const date = new Date(Number(year), Number(month) - 1);
     const label = date.toLocaleString('default', { month: 'short', year: 'numeric' });
     return {
         month: label,
         total: _.sumBy(monthGroups[key], 'total'),
         originalKey: key
     }
  });

  // Group by District for Top 10
  const districtGroups = _.groupBy(data, 'district');
  const topDistricts = Object.keys(districtGroups).map(district => {
      const records = districtGroups[district];
      return {
          district,
          state: records[0].state,
          total: _.sumBy(records, 'total')
      };
  })
  .sort((a, b) => b.total - a.total)
  .slice(0, 10);

  return {
    totalRecords: data.length,
    totalPopulation,
    avgPerDistrict: totalPopulation / (_.uniqBy(data, 'district').length || 1),
    recordsByState: _.mapValues(stateGroups, 'length'),
    ageDistribution: [
        { group: '0-5 Years', count: count0_5, percentage: (count0_5 / totalPopulation) * 100 },
        { group: '5-17 Years', count: count5_17, percentage: (count5_17 / totalPopulation) * 100 },
        { group: '18+ Years', count: count18Plus, percentage: (count18Plus / totalPopulation) * 100 },
    ],
    monthlyTrends,
    stateData,
    topDistricts
  };
};

export const exportToCSV = (data: ProcessedRecord[]) => {
    if (!data.length) return;

    // Format data for export (convert Date objects to strings)
    const exportData = data.map(row => ({
        Date: row.date.toLocaleDateString(),
        State: row.state,
        District: row.district,
        Pincode: row.pincode,
        '0-5 Years': row.age0_5,
        '5-17 Years': row.age5_17,
        '18+ Years': row.age18Plus,
        'Total Population': row.total,
        'Month-Year': row.monthYear,
        'Source ID': row.id
    }));
    
    const csv = Papa.unparse(exportData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `demographic_analysis_export_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
