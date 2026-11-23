import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  nom = signal('Ahmed');
  email = signal('Ahmed@esprit.tn');
}
