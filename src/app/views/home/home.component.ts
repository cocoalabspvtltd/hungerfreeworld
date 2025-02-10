import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  msg: any;
  data:  any; 
 
  constructor(private router: Router,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router) {
    
  }
  conatctForm                   = new FormGroup({
    email                       : new FormControl(),
    name                        : new FormControl(),
    Subject                     : new FormControl(),
    Message                     : new FormControl(),
   
  })
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Time between slides (in milliseconds)
    autoplayHoverPause: true, // Pause on hover
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  
  contact()
  {
   this.data={name:this.conatctForm.value.name,email:this.conatctForm.value.email,message:this.conatctForm.value.Message,subject:this.conatctForm.value.Subject}
   console.log(this.data);
    this.ApiService.Contact(this.data).subscribe(
      (res:any) => {
      console.log('contact',res)
      if(res.success==true){
        this.conatctForm.reset();
       this.msg=res.message;
      }else{
        console.log('error')
      
  }
  })
  ,(error: any)=>{
    console.log(error)
    this.msg=error.error.error;
  }
   }
}
