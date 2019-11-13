import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navbar } from '../models/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  apiURL = 'https://localhost:44377/api';

  constructor(private httpClient: HttpClient) {}

  public getAllPublished(): Observable<Navbar[]> {
    return this.httpClient.get<Navbar[]>(`${this.apiURL}/navbar/GetAllPublished`);
  }

  public getAll(): Observable<Navbar[]> {
    return this.httpClient.get<Navbar[]>(`${this.apiURL}/navbar`);
  }

  public get(id): Observable<Navbar> {
    return this.httpClient.get<Navbar>(`${this.apiURL}/navbar/${id}`);
  }

  public add(navbar: Navbar) {
    return this.httpClient.post(`${this.apiURL}/navbar`, navbar);
  }

  public update(navbar: Navbar) {
    return this.httpClient.put(`${this.apiURL}/navbar/${navbar.id}`, navbar);
  }
}
