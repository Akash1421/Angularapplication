import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private Username = 'admin';
  private Password = 'password123';

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      // Check if username and password are correct
      if (username === this.Username && password === this.Password) {
        // Navigate to the HomeComponent
        this.router.navigate(['/home']);
      } else {
        // Show an error message (you can use a snackbar or alert)
        alert('Invalid username or password');
      }
    }
  }

}
