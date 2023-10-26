// revistas.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RevistasService {
  private apiUrl = 'http://127.0.0.1:8000/revistas/';

  constructor(private http: HttpClient) {}

  getRevistas() {
    return this.http.get<Revista[]>(this.apiUrl);
  }
}

// Define la interfaz Revista
export interface Revista {
  id: number;
  link: string;
  image: string;
  titulo: string;
}