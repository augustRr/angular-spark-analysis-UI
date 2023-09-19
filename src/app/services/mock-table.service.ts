import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TableConfiguration, TableData } from '../components/table-data/table.interface';

@Injectable({
  providedIn: 'root'
})
export class MockTableService {
  private mockTableConfiguration: TableConfiguration = {
    columns: [
      { name: 'id', label: 'ID', dataType: 'number', sortable: true, groupable: false, visible: true, order: 1 },
      { name: 'name', label: 'Name', dataType: 'string', sortable: true, groupable: false, visible: true, order: 2 },
      { name: 'age', label: 'Age', dataType: 'number', sortable: true, groupable: true, visible: true, order: 3 },
    ],
    defaultSortColumn: 'id',
    defaultSortDirection: 'asc'
  };

  private mockTableData: TableData = {
    rows: [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Alice', age: 25 },
      { id: 3, name: 'Bob', age: 35 },
      { id: 4, name: 'Eve', age: 28 },
      { id: 5, name: 'Charlie', age: 22 },
      { id: 6, name: 'Grace', age: 29 },
      { id: 7, name: 'Otto', age: 28 },
      { id: 8, name: 'Jack', age: 22 },
      { id: 9, name: 'Florian', age: 25 },
      { id: 10, name: 'Mathilde', age: 28 },
      { id: 11, name: 'Tetris', age: 22 },
      { id: 12, name: 'Leonard', age: 29 },
      { id: 13, name: 'Touch', age: 27 },
      { id: 14, name: 'Charlotte', age: 22 },
      { id: 15, name: 'Julia', age: 28 },
    ],
    totalRows: 3
  };

  constructor() { }

  getTableConfiguration(): Observable<TableConfiguration> {
    return of(this.mockTableConfiguration);
  }

  getTableData(): Observable<TableData> {
    return of(this.mockTableData);
  }

  refreshTableData(): Observable<TableData> {
    // Simulate fetching new data (you can modify this as needed)
    const newData: TableData = {
      rows:[
        { count: 4 ,age: 22 },
        { count: 2 ,age: 25 },
        { count: 1 ,age: 27 },
        { count: 4 ,age: 28 },
        { count: 2 ,age: 29 },
        { count: 1 ,age: 30 },
        { count: 1 ,age: 35 },
      ],
      // rows: [
      //   { id: 4, name: 'Eve', age: 28 },
      //   { id: 5, name: 'Charlie', age: 22 },
      //   { id: 6, name: 'Grace', age: 29 },
      // ],

      totalRows: 3 // Update the total number of rows
    };

    return of(newData);
  }

}
