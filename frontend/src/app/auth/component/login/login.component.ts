import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup

  errorMessage! : String

  constructor(private formBuilder : FormBuilder, private authService : AuthService, private router : Router) {}
  
  ngOnInit() : void {
    this.loginForm = this.formBuilder.group(
      {
        pseudo: [null, Validators.required]
        ,password: [null, Validators.required]
      }
    )
  } 

  onSubmitForm(): void {
    this.authService.login(this.loginForm.value).pipe(
      tap(login => {
        if (login.allowed)
        {
          this.authService.setUserConnected(true)
          this.router.navigateByUrl('/')
        }
        else
        {
          this.errorMessage = "Connexion non autorisée"
        }
      })
    ).subscribe();
    
  }
}
