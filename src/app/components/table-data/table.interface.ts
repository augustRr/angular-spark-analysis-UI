export interface TableColumn {
  name: string;
  label: string;
  dataType: string;
  sortable: boolean;
  groupable: boolean;
  visible: boolean;
  order: number;
  aggregateAverage?: boolean; // Add this property
  aggregateMax?: boolean;     // Add this property
}

export interface TableConfiguration {
  columns: TableColumn[];  // Array of table columns
  defaultSortColumn?: string; // Optional: Default column for sorting
  defaultSortDirection?: 'asc' | 'desc'; // Optional: Default sorting direction
  groupBy?: string[];     // Optional: Columns to group by
}

export interface TableData {
  rows: any[];            // Array of data rows (Each row is an object)
  totalRows: number;      // Total number of rows (used for pagination)
}

