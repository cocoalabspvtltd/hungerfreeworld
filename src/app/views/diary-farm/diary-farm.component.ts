import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-diary-farm',
  templateUrl: './diary-farm.component.html',
  styleUrls: ['./diary-farm.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, CarouselModule],
  
})
export class DiaryFarmComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,   
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
