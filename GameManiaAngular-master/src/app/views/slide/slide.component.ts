import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})


export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class NgbdCarouselConfig {
  

  // constructor(config: NgbdCarouselConfig) {
  //   // customize default values of carousels used by this component tree
  //   config.interval = 10000;
  //   config.wrap = false;
  //   config.keyboard = false;
  //   config.pauseOnHover = false;
  // }
}

