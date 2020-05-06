import { Component, OnInit } from '@angular/core';

import {CAPITALES} from '../capitales';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  capitales = CAPITALES;

  constructor() { }

  ngOnInit(): void {
  }

}
