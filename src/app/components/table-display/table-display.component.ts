import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockTableService } from '../../services/mock-table.service';
// import { TableService } from '../../services/table.service';
import { TableConfiguration, TableData, TableColumn } from '../table-data/table.interface';

import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})

export class TableDisplayComponent implements OnInit {
  // @ts-ignore
  tableConfiguration: TableConfiguration;
  // @ts-ignore
  tableData: TableData;
  // @ts-ignore
  originalTableData: TableData;
  groupByColumn: string | null = null;
  selectedGroupingColumns: TableColumn[] = [];
  groupByOptions: { label: string; value: string; }[] = [];

  constructor(private tableService: MockTableService) {} // Inject the mock service

  ngOnInit() {
    this.tableService.getTableConfiguration().subscribe(config => {
      this.tableConfiguration = config;
      this.generateGroupByOptions();
    });
    this.tableService.getTableData().subscribe(data => {
      this.originalTableData = cloneDeep(data);
      this.tableData = cloneDeep(data);
    });
  }

  refreshData() {
      this.tableService.refreshTableData(this.groupByColumn!).subscribe(data => {
        this.tableData = data;
        this.updateTableConfiguration(); // Update columns based on the choice
      });
  }
  updateTableConfiguration() {
    if (this.groupByColumn === 'null') {
      this.tableConfiguration.columns = [
        // Define your columns for the "None" option here
        // For example, if you want to show the original columns:
        { name: 'id', label: 'ID', dataType: 'number', sortable: true, groupable: false, visible: true, order: 1 },
        { name: 'name', label: 'Name', dataType: 'string', sortable: true, groupable: false, visible: true, order: 2 },
        { name: 'age', label: 'Age', dataType: 'number', sortable: true, groupable: false, visible: true, order: 3 },
      ];
    }else if (this.groupByColumn === 'age') {
      this.tableConfiguration.columns = [
        { name: 'age', label: 'Age', dataType: 'number', sortable: true, groupable: true, visible: true, order: 1 },
        { name: 'count', label: 'Count', dataType: 'number', sortable: true, groupable: false, visible: true, order: 2 },
      ];
    } else if (this.groupByColumn === 'name') {
      this.tableConfiguration.columns = [
        { name: 'name', label: 'Name', dataType: 'string', sortable: true, groupable: true, visible: true, order: 1 },
        { name: 'count', label: 'Count', dataType: 'number', sortable: true, groupable: false, visible: true, order: 2 },
      ];
    }
  }

  onGroupByChange() {
    // Reset selected grouping columns when the group by selection changes
    this.selectedGroupingColumns = [];
  }
  generateGroupByOptions() {
    this.groupByOptions = this.tableConfiguration.columns
      .filter(column => column.groupable)
      .map(column => ({
        label: column.label,
        value: column.name,
      }));
  }
}
