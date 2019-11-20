import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../shared/app.settings';
import { Widget } from '../models/widget';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private httpClient: HttpClient) {}

  public getAllPublished(): Observable<Widget[]> {
    return this.httpClient.get<Widget[]>(`${AppSettings.API_ENDPOINT}/widget/GetAllPublished`);
  }

  public getAll(): Observable<Widget[]> {
    return this.httpClient.get<Widget[]>(`${AppSettings.API_ENDPOINT}/widget`);
  }

  public get(id): Observable<Widget> {
    return this.httpClient.get<Widget>(`${AppSettings.API_ENDPOINT}/widget/${id}`);
  }

  public add(widget: Widget) {
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}/widget`, widget);
  }

  public update(widget: Widget) {
    return this.httpClient.put(`${AppSettings.API_ENDPOINT}/widget/${widget.id}`, widget);
  }

  public upload(file: File){
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}/widget/UploadFile`, formData);
  }
}
