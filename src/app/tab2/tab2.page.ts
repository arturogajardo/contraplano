
import { Revista } from '../revistas.service';
import { Component, OnInit } from '@angular/core';
import { RevistasService } from 'src/app/revistas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  revistasData: Revista[] = []; 

  constructor(private revistasService: RevistasService) {}

  ngOnInit() {
    this.revistasService.getRevistas().subscribe(
      (data: Revista[]) => {
        this.revistasData = data;
      },
      (error) => {
        console.error('Error al obtener las revistas', error);
      }
    );
  }
}
