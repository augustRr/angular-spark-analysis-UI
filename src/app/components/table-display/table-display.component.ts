import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockTableService } from '../../services/mock-table.service';
// import { TableService } from '../../services/table.service';
import { TableConfiguration, TableData, TableColumn } from '../table-data/table.interface';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
// export class TableDisplayComponent implements OnInit {
//   tableId: string | null = null;
//   tableConfiguration: TableConfiguration = { columns: [] };
//   tableData: TableData = { rows: [], totalRows: 0 };
//   groupByColumn: string | null = null;
//   selectedGroupingColumns: TableColumn[] = [];
//
//   constructor(private route: ActivatedRoute, private tableService: MockTableService) { }
//
//   ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       this.tableId = params.get('id');
//       // Fetch table configuration and data when the component initializes
//       this.tableService.getTableConfiguration(this.tableId!).subscribe(config => {
//         this.tableConfiguration = config;
//       });
//       this.tableService.getTableData(this.tableId!).subscribe(data => {
//         this.tableData = data;
//       });
//     });
//   }
//
//   // Function to refresh data when the Refresh Data button is clicked
//   refreshData() {
//     // Call the new refreshTableData method from the service
//     this.tableService.refreshTableData(this.tableId!).subscribe(data => {
//       // Update this.tableData with the refreshed data
//       this.tableData = data;
//     });
//   }
// }
export class TableDisplayComponent implements OnInit {
  // @ts-ignore
  tableConfiguration: TableConfiguration;
  // @ts-ignore
  tableData: TableData;
  groupByColumn: string | null = null;
  selectedGroupingColumns: TableColumn[] = [];

  constructor(private tableService: MockTableService) {} // Inject the mock service

  ngOnInit() {
    this.tableService.getTableConfiguration().subscribe(config => {
      this.tableConfiguration = config;
    });
    this.tableService.getTableData().subscribe(data => {
      this.tableData = data;
    });
  }

  refreshData() {
    // Implement data refresh logic (e.g., fetch new data from the mock service)
    // Update this.tableData with the refreshed data
    this.tableService.refreshTableData().subscribe(data => {
      this.tableData = data;
    });
  }

  onGroupByChange() {
    // Reset selected grouping columns when the group by selection changes
    this.selectedGroupingColumns = [];
  }
}
