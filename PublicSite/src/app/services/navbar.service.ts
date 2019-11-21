import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navbar } from '../models/navbar';
import { AppSettings } from '../shared/app.settings';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private httpClient: HttpClient) {}

  public getAllPublished(): Observable<Navbar[]> {
    return this.httpClient.get<Navbar[]>(`${AppSettings.API_ENDPOINT}/navbar/GetAllPublished`);
  }

  public getAll(): Observable<Navbar[]> {
    return this.httpClient.get<Navbar[]>(`${AppSettings.API_ENDPOINT}/navbar`);
  }

  public get(id): Observable<Navbar> {
    return this.httpClient.get<Navbar>(`${AppSettings.API_ENDPOINT}/navbar/${id}`);
  }

  public add(navbar: Navbar) {
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}/navbar`, navbar);
  }

  public update(navbar: Navbar) {
    return this.httpClient.put(`${AppSettings.API_ENDPOINT}/navbar/${navbar.id}`, navbar);
  }
}
