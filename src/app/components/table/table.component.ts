import {Component, Input} from '@angular/core';
import { TableConfiguration, TableData, TableColumn } from '../table-data/table.interface'; // Import the interfaces
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() configuration: TableConfiguration = { columns: [] }; // Table configuration
  @Input() data: TableData = { rows: [], totalRows: 0 }; // Table data
}

