import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import { TableConfiguration, TableData } from '../components/table-data/table.interface';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class MockTableService {
  private baseUrl = 'http://localhost:8080'; // Replace with the actual URL of your Scala API

  constructor(private http: HttpClient) { }

  getTableConfiguration(): Observable<TableConfiguration> {
    const url = `${this.baseUrl}/api/table-configuration`; // Replace with the actual API endpoint for table configuration

    return this.http.get<TableConfiguration>(url).pipe(
      tap(response => {
        console.log('Table Configuration Response:', response);
      }),
      catchError(error => {
        console.error('Error fetching table configuration:', error);
        throw error; // Rethrow the error to be caught by the calling code if needed
      })
    );
  }

  getTableData(): Observable<TableData> {
    const url = `${this.baseUrl}/api/table-data`; // Replace with the actual API endpoint for table data
    return this.http.get<TableData>(url);
  }

  refreshTableData(groupingOption: string): Observable<TableData> {
    const url = `${this.baseUrl}/api/refresh-table-data?groupingOption=${groupingOption}`;
    return this.http.get<TableData>(url);
  }
}


// private mockTableData: TableData = {
  //   rows: [
  //     { id: 1, name: 'John', age: 30 },
  //     { id: 2, name: 'Alice', age: 25 },
  //     { id: 3, name: 'Bob', age: 35 },
  //     { id: 4, name: 'Eve', age: 28 },
  //     { id: 5, name: 'Charlie', age: 22 },
  //     { id: 6, name: 'Grace', age: 29 },
  //     { id: 7, name: 'Otto', age: 28 },
  //     { id: 8, name: 'Jack', age: 22 },
  //     { id: 9, name: 'Florian', age: 25 },
  //     { id: 10, name: 'Mathilde', age: 28 },
  //     { id: 11, name: 'Tetris', age: 22 },
  //     { id: 12, name: 'Leonard', age: 29 },
  //     { id: 13, name: 'Touch', age: 27 },
  //     { id: 14, name: 'Charlotte', age: 22 },
  //     { id: 15, name: 'Julia', age: 28 },
  //   ],
  //   totalRows: 15
  // };


  // @ts-ignore
  // refreshTableData(groupingOption: string): Observable<TableData> {
  //   // Simulate fetching new data (you can modify this as needed)
  //   const newAgeGroupData: TableData = {
  //     rows:[
  //       { count: 4 ,age: 22 },
  //       { count: 2 ,age: 25 },
  //       { count: 1 ,age: 27 },
  //       { count: 4 ,age: 28 },
  //       { count: 2 ,age: 29 },
  //       { count: 1 ,age: 30 },
  //       { count: 1 ,age: 35 },
  //     ],
  //      totalRows: 7 // Update the total number of rows
  //   };
  //   const groupedDataByName = {
  //     rows: [
  //       {name: 'John', count: 1},
  //       {name: 'Alice', count: 1},
  //       {name: 'Bob', count: 1},
  //       {name: 'Eve', count: 1},
  //       {name: 'Charlie', count: 1},
  //       {name: 'Grace', count: 1},
  //       {name: 'Otto', count: 1},
  //       {name: 'Jack', count: 1},
  //       {name: 'Florian', count: 1},
  //       {name: 'Mathilde', count: 1},
  //       {name: 'Tetris', count: 1},
  //       {name: 'Leonard', count: 1},
  //       {name: 'Touch', count: 1},
  //       {name: 'Charlotte', count: 1},
  //       {name: 'Julia', count: 1},
  //     ],
  //     totalRows: 15
  //   }
  //   if (groupingOption === 'null'){
  //     return of(this.mockTableData);
  //   }
  //   else if (groupingOption === 'age'){
  //     return of(newAgeGroupData);
  //   }
  //   else if(groupingOption === 'name'){
  //     return of(groupedDataByName);
  //   }
  //
  // }


