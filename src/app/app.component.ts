import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  loginForm: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }
  showAlert(): void {
    if (this.loginForm.valid) {
       
      console.log('Form submitted with values:', this.loginForm.value);
      alert("Login sucessfull!..!");
      this.loginForm.reset();
  }
    
}
}
