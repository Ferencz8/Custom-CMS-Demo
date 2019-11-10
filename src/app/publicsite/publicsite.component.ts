import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Navbar } from '../models/navbar';
import { Widget } from '../models/widget';

@Component({
  selector: 'app-publicsite',
  templateUrl: './publicsite.component.html',
  styleUrls: ['./publicsite.component.scss']
})
export class PublicsiteComponent implements OnInit {

  navbars$: Observable<Navbar[]>;
  widget$: Observable<Widget>;

  constructor() {

    this.navbars$ = of([
      new Navbar({ id: 1, name: 'Home', url: '#home', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 2, name: 'About', url: '#about', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 3, name: 'Services', url: '#services', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 4, name: 'Team', url: '#team', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 5, name: 'Portfolio', url: '#portfolio', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 6, name: 'Blog', url: '#blog', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 7, name: 'Pricing Tables', url: '#pricing', isPublished: true, displayOrder: 0 }),
      new Navbar({ id: 8, name: 'Contact', url: '#contact', isPublished: true, displayOrder: 0 }),
    ]);

    const widget = new Widget();
    widget.content = `<div class="row">
    <div class="col-lg-4 callout">
      <span class="icon icon-stack"></span>
      <h2>Bootstrap 3</h2>
      <p>Dot Theme is powered by Bootstrap 3. The incredible Mobile First Framework is the best option to run your
        website. </p>
    </div>
    <!-- col-lg-4 -->

    <div class="col-lg-4 callout">
      <span class="icon icon-eye"></span>
      <h2>Retina Ready</h2>
      <p>You can use this theme with your iPhone, iPad or MacBook Pro. This theme is retina ready and that is awesome.
      </p>
    </div>
    <!-- col-lg-4 -->

    <div class="col-lg-4 callout">
      <span class="icon icon-heart"></span>
      <h2>Crafted with Love</h2>
      <p>We don't make sites, we craft themes with love & passion. That is our most valued secret. We only do thing that
        we love. </p>
    </div>
    <!-- col-lg-4 -->
  </div>`;
    this.widget$ = of(widget);
  }

  ngOnInit() {
  }

}
