import { Component } from '@angular/core';
import {ReactiveFormsModule,Validators,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  template: `
  <h2>Profile Form</h2>
  <p>Name: {{ profileForm.value.name}}</p>
  <p>Email: {{ profileForm.value.email}}</p>

    <form 
    [formGroup]="profileForm"
    (ngSubmit)="handleSubmit()"
    >
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>
      <label for="">
        Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  styleUrl: './user.component.scss',
})
export class UserComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    )
  }
}
