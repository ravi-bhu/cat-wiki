import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { RatingComponent } from '../../rating/rating.component';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-info',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './cat-info.component.html',
  styleUrls: ['./cat-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatInfoComponent {
  thumbnail$ = this.activatedRoute.queryParams.pipe(
    map((params) => params['imageId']),
    switchMap((imageId) => this.catService.getCatImage(imageId))
  );
  private breed$ = this.activatedRoute.params.pipe(
    map((params) => params['breed'])
  );
  cat$ = this.breed$.pipe(
    switchMap((breed) => this.catService.getCatDetails(breed))
  );

  pictures$ = this.breed$.pipe(
    switchMap((breed) => this.catService.getCatPictures(breed))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CatService
  ) {}
}
