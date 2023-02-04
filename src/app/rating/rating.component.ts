import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ToArrayPipe } from '../common/to-array.pipe';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, ToArrayPipe],
  template: `
    <div class="rating">
      <span
        *ngFor="let s of scale | toArray"
        [ngClass]="s <= rating ? 'enabled' : 'disabled'"
      >
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .rating {
        display: flex;
        gap: 1rem;
        align-items: center;

        > span {
          padding: 0.375rem 1.875rem;
          border-radius: 0.5rem;
        }
      }

      .enabled {
        background-color: var(--clr-rating-enabled);
      }

      .disabled {
        background-color: var(--clr-rating-disabled);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  @Input() scale = 5;
  @Input() rating = 1;
}
