import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  newsWithoutImages: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getNewsWithoutImages();
  }

  getNewsWithoutImages() {
    const apiUrl = 'http://localhost:8000/data'; // Cambia la URL a tu API
    this.http.get(apiUrl).subscribe((data: any) => {
      this.newsWithoutImages = data.revistas;
    });
  }

}
