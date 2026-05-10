import { Component, inject } from '@angular/core';
import { contentData } from '../../data/content-data';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteLanguageService } from '../../shared/services/site-language';

@Component({
  selector: 'app-know-more-section',
  imports: [FeatureCard],
  templateUrl: './know-more-section.html',
  styleUrl: './know-more-section.scss',
})
export class KnowMoreSection {
  private language = inject(SiteLanguageService);

  readonly lang = this.language.lang;
  readonly brand = contentData.brand;

  get content() {
    return contentData.showcase[this.lang()].knowMore;
  }

  trackCard(index: number) {
    return index;
  }
}
