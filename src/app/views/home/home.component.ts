import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, CarouselModule],
  providers: [ApiService] 
})
export class HomeComponent {
  msg: any;
  data: any;
  conatctForm: FormGroup;

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) {
    this.conatctForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
    nav: true
  };

  contact() {
    this.data = {
      name: this.conatctForm.value.name,
      email: this.conatctForm.value.email,
      message: this.conatctForm.value.Message,
      subject: this.conatctForm.value.Subject
    };

    console.log(this.data);

    this.apiService.Contact(this.data).subscribe({
      next: (res: any) => {
        console.log('contact', res);
        if (res.success) {
          this.conatctForm.reset();
          this.msg = res.message;
        } else {
          console.log('error');
        }
      },
      error: (error: any) => {
        console.log(error);
        this.msg = error.error.error;
      }
    });
  }
}
