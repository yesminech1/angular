import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  amis = signal(['Sami', 'Youssef', 'Amine']);
}
