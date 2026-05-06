import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToogleCasePipe } from '../../pipes/toogle-case.pipe';
import { Hero } from '../../interfaces/hero';
import { HeroColorPipe } from '../../pipes/heroColor-pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator-pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by-pipe';
import { HeroFilterPipe } from '../../pipes/hero-filter-pipe';
import { CanFlyPipe } from '../../pipes/can-fly-pipe';
import { heroes } from '../../data/hero.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToogleCasePipe,CanFlyPipe, HeroColorPipe,HeroTextColorPipe,TitleCasePipe,HeroCreatorPipe,HeroSortByPipe,HeroFilterPipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
   name = signal('Patsy Pelayo');
   upperCaseSignal = signal(true);
   heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');

}
