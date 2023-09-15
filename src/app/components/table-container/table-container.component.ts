import { Component } from '@angular/core';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent {
  tables = [
    { id: 1, name: 'World Data 2023'},
    { id: 2, name: 'Neighboring Countries' },
    { id: 3, name: 'Generic Food' },
    { id: 4, name: 'Earthquakes 1975-2015' },
    { id: 5, name: 'Countries and Continents' },
    { id: 6, name: 'Consumer Complaints' },
    { id: 7, name: 'Atlanta Crime' },
    { id: 8, name: 'Jersey Demographics' },
    { id: 9, name: 'Bike Rental 2015' },
    { id: 10, name: 'Table 10' },
    { id: 11, name: 'Table 11' },
    { id: 12, name: 'Table 12' },
    // Add more tables as needed
  ];
}
