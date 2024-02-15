import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  loginForm: FormGroup;
  getvalue:any;
  constructor(private fb: FormBuilder,public http:HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }
  ngOnInit(){
    this.getval();
    
  }
  getval(): void{
    this.http.get('');
  }
  showAlert(): void {
    if (this.loginForm.valid) {
       
      console.log('Form submitted with values:', this.loginForm.value);
      alert("Login sucessfull!..!");
      this.loginForm.reset();
  }
  
    
}
}
