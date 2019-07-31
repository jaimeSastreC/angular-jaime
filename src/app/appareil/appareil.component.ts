import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  secondes: number;

  // appareilName:string = 'machine à laver';
  // props peuvent être changés à partir de app.component, donc ensuite à partir d'une DB ou service
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;
  @Input() id: number;

  // appareilStatus: string = 'éteint';

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {

  }


  getAppareilName() {
    return this.appareilName;
  }

  getAppareilStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'éteint') {
      return 'red';
    } else if (this.appareilStatus) {
      return 'green';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnAppareil(this.appareilIndex);
    console.log('OOOOOOOOOOOOOOOO');
  }

  onSwitchOff() {
    this.appareilService.switchOffAppareil(this.appareilIndex);
  }

}
