import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})

export class RadialComponent implements OnInit {
  @Input() data='';
  constructor() { }

  ngOnInit() {
    

  }

}
