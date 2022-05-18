import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userForm!: FormGroup;
  minDate: any = { year: 1900, month: 1, day: 1 };
  maxDate: any;

  constructor(
    private fb: FormBuilder,
    private credentialsService: CredentialsService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMaxDate();
    this.createForm();
  }

  getMaxDate() {
    const date = new Date();
    date.setDate(date.getDate());
    date.setFullYear(date.getFullYear() - 16);
    this.maxDate = {
      year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()
    }
  }

  updateUser() {
    alert('User info has been updated!');
    this.router.navigate(['/dashboard']);
  }

  cancelUser() {
    this.router.navigate(['/dashboard']);
  }

  formatDate(tDate: Date | undefined) {
    if (!tDate) {
      return ''
    }
    const date = new Date(tDate);
    return {
      year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()
    }
  }

  private createForm() {
    this.userForm = this.fb.group({
      email: [this.credentialsService.credentials?.email, [Validators.required, Validators.email]],
      firstName: [this.credentialsService.credentials?.firstName, Validators.required],
      lastName: [this.credentialsService.credentials?.lastName, Validators.required],
      dateOfBirth: [this.formatDate(this.credentialsService.credentials?.dateOfBirth), Validators.required],
      id: [''],
      userId: [''],
    });
  }

}
