import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-diary-farm',
  templateUrl: './diary-farm.component.html',
  styleUrls: ['./diary-farm.component.scss']
})
export class DiaryFarmComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
}
