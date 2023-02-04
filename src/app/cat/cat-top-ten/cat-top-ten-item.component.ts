import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-top-ten-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pic-card">
      <img class="pic-card" [src]="imageUrl" alt="cat pic" />
    </div>
    <section>
      <h1>{{ index }}. {{ name }}</h1>
      <p>{{ description }}</p>
    </section>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatTopTenItemComponent {
  @Input() index = 0;
  @Input() name = '';
  @Input() description = '';
  @Input() imageUrl = '';
}
