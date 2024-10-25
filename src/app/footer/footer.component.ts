import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @ViewChild('loginpop') loginpop!: ElementRef

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router
  ) {
  }

  login(): void {
    this.errorMessage = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.response.token);  // Save token on successful login
        this.loginpop.nativeElement.click()
        this.router.navigate(['']);
      },
      error: (error) => {
        // Handle different error scenarios based on error response
        if (error instanceof ErrorEvent) {
          // Network error or client-side error
          this.errorMessage = 'Network error: Please check your connection.';
        } else {
          // Server-side error
          if (error.status === 401) {
            this.errorMessage = 'Invalid credentials. Please try again.';
          } else if (error.status === 500) {
            this.errorMessage = 'Server error. Please try again later.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        }
      }
    });
  }
}
