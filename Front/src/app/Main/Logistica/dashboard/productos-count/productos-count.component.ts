import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productos-count',
  templateUrl: './productos-count.component.html',
  styleUrls: ['./productos-count.component.css']
})
export class ProductosCountComponent implements OnInit {

  constructor() { }

  @Input() imagen = ''
  @Input() titulo = 'titulo'
  @Input() count = '0'

  ngOnInit() {
  }

}
