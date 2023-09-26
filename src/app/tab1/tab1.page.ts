import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  newsWithImages: any[] = [];


  constructor(private http: HttpClient) {
    this.loadNewsWithImages();
  }

  loadNewsWithImages() {
    const apiUrl = 'http://127.0.0.1:8000/data';  // Reemplaza con la URL de tu API

    this.http.get(apiUrl).subscribe((data: any) => {
      this.newsWithImages = data.noticias;
    });
  }

}
