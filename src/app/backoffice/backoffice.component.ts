import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  title = 'Backoffice';

  navLinks = [
    { label: 'Navbar', path: '/backoffice/navbars', isActive: true },
    { label: 'Widget', path: '/backoffice/widgets' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
