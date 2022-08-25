import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <label for="firstname">Enter your name</label>
      <input type="text" formControlName="firstname" id="firstname" />
      <label for="lastname">Enter your last name</label>
      <input type="text" formControlName="lastname" id="lastname" />
      <button (click)="generate()">Generate a user</button>
      <p id="output">{{ userName | json }}</p>
    </form>
  `,
  styles: [
    'form { display: flex; flex-direction: column; }',
    'input { margin-bottom: 10px; max-width: 150px; height: 20px; }',
    'button { background-color: darkturquoise; border: 1px solid white; border-radius: 5px; max-width: 160px; width: 100%; height: 30px; margin-top: 10px; }'
  ],
})
export class AppComponent {
  title = 'Angular-Generate-Username';

  firstName: FormControl = new FormControl('Ali');
  lastName: FormControl = new FormControl('Q');
  userName!: string;

  form = new FormGroup({
    firstname: this.firstName,
    lastname: this.lastName,
  });

  generate() {
    this.userName =
      this.form.value.firstname.toLowerCase() +
      '_' +
      this.form.value.lastname.toLowerCase() +
      '_' +
      (Math.floor(Math.random() * 9) + 1);
  }
}
