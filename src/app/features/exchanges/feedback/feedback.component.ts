import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  rating = 0;
  hoveredRating = 0;

  setRating(value: number): void {
    this.rating = value;
  }

  setHoveredRating(value: number): void {
    this.hoveredRating = value;
  }

  isStarActive(value: number): boolean {
    return value <= (this.hoveredRating || this.rating);
  }
}
