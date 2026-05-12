import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private readonly users = inject(UserService);
  private readonly route = inject(ActivatedRoute);

  category = '';
  modality = '';
  query = this.route.snapshot.queryParamMap.get('q') ?? '';

  readonly users$ = this.users.getUsers();

  filterUsers(users: User[]): User[] {
    return users.filter(user => {
      const searchable = [
        user.name,
        user.location,
        user.modality,
        ...user.teaches.map(skill => `${skill.name} ${skill.category}`),
        ...user.wants.map(skill => `${skill.name} ${skill.category}`)
      ].join(' ').toLowerCase();

      const matchesText = !this.query || searchable.includes(this.query.toLowerCase());
      const matchesCategory = !this.category || user.teaches.some(skill => skill.category === this.category) || user.wants.some(skill => skill.category === this.category);
      const matchesModality = !this.modality || user.modality === this.modality || user.modality === 'Mixto';

      return matchesText && matchesCategory && matchesModality;
    });
  }

  clearFilters(): void {
    this.query = '';
    this.category = '';
    this.modality = '';
  }
}
