import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableConfiguration, TableData } from '../components/table-data/table.interface';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = 'http://localhost:4421'; // Replace with your Scala Spark project's URL

  constructor(private http: HttpClient) { }

  getTableConfiguration(): Observable<TableConfiguration> {
    return this.http.get<TableConfiguration>(`${this.baseUrl}/table-configuration`);
  }

  getTableData(): Observable<TableData> {
    return this.http.get<TableData>(`${this.baseUrl}/table-data`);
  }
}
