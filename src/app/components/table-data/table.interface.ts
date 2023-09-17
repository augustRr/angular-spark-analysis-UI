export interface TableColumn {
  name: string;           // Column name or identifier
  label: string;          // Display label for the column
  dataType: string;       // Data type of the column (e.g., 'string', 'number', 'date', etc.)
  sortable: boolean;      // Whether the column is sortable
  groupable: boolean;     // Whether the column is groupable
  visible: boolean;       // Whether the column is initially visible
  order: number;          // Display order of the column
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

