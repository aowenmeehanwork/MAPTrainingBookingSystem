import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'booking-system-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  @Input() links: { title: string, src: string }[];

  constructor() { }

  ngOnInit() {
  }

}
