// main-page.component.ts
import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { TableConfiguration, TableData } from '../table-data/table.interface';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit{
  // @ts-ignore
  tableConfiguration: TableConfiguration;
  // @ts-ignore
  tableData: TableData;

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTableConfiguration().subscribe(config => {
      this.tableConfiguration = config;
    });
    this.tableService.getTableData().subscribe(data => {
      this.tableData = data;
    });
  }
}
