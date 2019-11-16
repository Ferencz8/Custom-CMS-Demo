import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';
import { WidgetType } from 'src/app/models/widget.type';
import { WidgetService } from 'src/app/services/widget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'isPublished', 'actions'];

  dataSource: Widget[] = [
    { id: 1, name: 'Widget1', type: WidgetType.Html, content: '', isPublished: false, displayOrder: 0 },
    { id: 2, name: 'Widget2', type: WidgetType.Html, content: '', isPublished: true, displayOrder: 1 }
  ];
  constructor(private widgetService: WidgetService,
              private router: Router) { }

  ngOnInit() {
    this.widgetService.getAll().subscribe(res => this.dataSource = res);
  }

  edit(id) {
    this.router.navigate([`/backoffice/editHtmlWidget/${id}`]);
  }
}
