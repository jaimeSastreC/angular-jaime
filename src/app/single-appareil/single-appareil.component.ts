import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
// infos route active, donc aussi :id
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // exemple simple
    // this.name = this.route.snapshot.params['id'];
    const id = this.route.snapshot.params['id'];
    // attention: penser à convertir  (cast) en number avec +
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
