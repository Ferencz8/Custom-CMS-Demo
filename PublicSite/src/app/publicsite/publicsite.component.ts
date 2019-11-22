import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Navbar } from '../models/navbar';
import { Widget } from '../models/widget';
import { NavbarService } from '../services/navbar.service';
import { WidgetService } from '../services/widget.service';
import { WidgetType } from '../models/widget.type';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publicsite',
  templateUrl: './publicsite.component.html',
  styleUrls: ['./publicsite.component.scss']
})
export class PublicsiteComponent implements OnInit {

  pathName: string;
  navbars$: Observable<Navbar[]>;
  widgets$: Observable<Widget[]>;
  productWidgets$: Observable<Widget[]>;

  constructor(private navbarService: NavbarService,
              private widgetService: WidgetService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('PublicSite');
    this.pathName = window.location.pathname;

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
