import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CatTopTenItemComponent } from './cat-top-ten-item.component';
import { CatSummary } from '../cat.model';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-top-ten',
  standalone: true,
  imports: [CommonModule, CatTopTenItemComponent],
  template: `
    <h1>Top 10 most searched breeds</h1>
    <app-cat-top-ten-item
      *ngFor="let cat of cats$ | async; let i = index"
      [index]="i + 1"
      [imageUrl]="cat.imageUrl"
      [name]="cat.name"
      [description]="cat.description"
    >
    </app-cat-top-ten-item>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatTopTenComponent {
  cats$: Observable<CatSummary[]> = this.catService
    .getTopTenSearchedCats()
    .pipe(tap(console.log));
  constructor(private catService: CatService) {}
}
