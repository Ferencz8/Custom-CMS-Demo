import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Navbar } from '../models/navbar';
import { Widget } from '../models/widget';
import { NavbarService } from '../services/navbar.service';
import { WidgetService } from '../services/widget.service';
import { WidgetType } from '../models/widget.type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-publicsite',
  templateUrl: './publicsite.component.html',
  styleUrls: ['./publicsite.component.scss']
})
export class PublicsiteComponent implements OnInit {

  navbars$: Observable<Navbar[]>;
  widgets$: Observable<Widget[]>;
  productWidgets$: Observable<Widget[]>;

  constructor(private navbarService: NavbarService,
              private widgetService: WidgetService) {

    // this.navbars$ = of([
    //   new Navbar({ id: 1, name: 'Home', url: '#home', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 2, name: 'About', url: '#about', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 3, name: 'Services', url: '#services', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 4, name: 'Team', url: '#team', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 5, name: 'Portfolio', url: '#portfolio', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 6, name: 'Blog', url: '#blog', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 7, name: 'Pricing Tables', url: '#pricing', isPublished: true, displayOrder: 0 }),
    //   new Navbar({ id: 8, name: 'Contact', url: '#contact', isPublished: true, displayOrder: 0 }),
    // ]);

  }

  ngOnInit() {
    this.navbars$ = this.navbarService.getAllPublished();

    // use a custom pipe
    this.widgets$ = this.widgetService.getAllPublishedOfType(WidgetType.Html);
    this.productWidgets$ = this.widgetService.getAllPublishedOfType(WidgetType.Product).pipe(
      map(res => {
        return res.map(value => {
          value.content = JSON.parse(value.content);
          console.log(value);
          return value;
        });
      })
    );
  }
}
