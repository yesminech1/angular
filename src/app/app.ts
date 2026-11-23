import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Profile } from './profile/profile';
import { Friends } from './friends/friends';
import { Notifications } from './notifications/notifications';
import { Footer } from './footer/footer';
import { ConferenceListComponent } from './conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, Profile, Friends, Notifications, ConferenceListComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
