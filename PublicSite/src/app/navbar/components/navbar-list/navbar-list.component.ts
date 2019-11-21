import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.scss']
})
export class NavbarListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url', 'isPublished', 'actions'];

  dataSource$: Observable<Navbar[]>;

  constructor(private navbarService: NavbarService,
    private router: Router) { }

  ngOnInit() {
    this.dataSource$ = this.navbarService.getAll();
  }

  edit(id) {
    this.router.navigate([`/backoffice/editnavbar/${id}`]);
  }
}
