import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <span class="logo logo--white"></span>
      <span class="copyright">
        © created by Ravi Bhushan - devChallenge.io 2023
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }

      .container {
        background-color: var(--clr-black);
        color: var(--clr-white);
        padding: 1rem 3rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-radius: 2.5rem 2.5rem 0 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
