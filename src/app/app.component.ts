import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Backoffice';

  navLinks = [
    { label: 'Navbar', path: '/navbars', isActive: true },
    { label: 'Widget', path: '/widgets' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // navigate to default route
    //this.router.navigate(['/navbars']);
  }
}
