import { Component, OnInit, Input, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';
import { Subscription, Subject, merge, Observable } from 'rxjs';
import { pairwise, filter, partition, map} from "rxjs/operators";

import {Paire} from '../paire';
import {CAPITALES} from '../capitales';

@Component({
  selector: 'app-relier',
  templateUrl: './relier.component.html',
  styleUrls: ['./relier.component.css']
})
export class RelierComponent implements OnInit {
  @Input () paires: Paire [];

  @Output() leftpartSelected = new EventEmitter<number>();
  @Output() rightpartSelected = new EventEmitter<number>();
  @Output() leftpartUnselected = new EventEmitter();
  @Output() rightpartUnselected = new EventEmitter();


  paireResolue: Paire [] = [];
  paireNonResolue: Paire [] = [];

  test: number;

  constructor() { }

  private Shuffle(paire: Paire){
    
    this.test = Math.random() * 10;
      
    }


  ngOnInit() {
    for( let i=0; i<this.paires.length; i++){
      this.paireNonResolue.push(this.paires[i]);
    }
  }

}
