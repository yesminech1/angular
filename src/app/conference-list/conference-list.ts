import { Component, computed, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { ConferenceList } from '../models/conference-list';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceListComponent {
  conferences = signal<Conference[]>(ConferenceList);
  search = signal('');

  // conférences à venir, filtrées par le titre saisi
  filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    const now = new Date();
    return this.conferences().filter(
      (c) => c.date >= now && c.title.toLowerCase().includes(term),
    );
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  register(id: number): void {
    this.conferences.update((list) =>
      list.map((c) =>
        c.id === id && this.remaining(c) > 0
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c,
      ),
    );
  }
}
