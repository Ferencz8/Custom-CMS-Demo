import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss']
})
export class NavbarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url', 'isPublished', 'actions'];

  dataSource: Navbar[] = [
    { id: 1, name: 'About', url: '/about', isPublished: false, displayOrder: 0 },
    { id: 2, name: 'Contacts', url: '/contacts', isPublished: true, displayOrder: 0 },
    { id: 3, name: 'Case Studies', url: '/case-studies', isPublished: false, displayOrder: 0 },
    { id: 4, name: 'Education', url: '/education', isPublished: true, displayOrder: 0 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
