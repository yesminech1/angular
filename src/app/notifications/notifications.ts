import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    'Une nouvelle conférence est disponible.',
    'Sami vous a envoyé une invitation.',
  ]);
}
