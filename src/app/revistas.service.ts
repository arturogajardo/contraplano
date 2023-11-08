

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RevistasService {
  private apiUrl = 'https://apicontraplano.onrender.com/revistas/';

  constructor(private http: HttpClient) {}

  getRevistas() {
    return this.http.get<Revista[]>(this.apiUrl);
  }
}


export interface Revista {
  id: number;
  link: string;
  image: string;
  titulo: string;
}