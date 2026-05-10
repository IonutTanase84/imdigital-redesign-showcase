import { Component, inject } from '@angular/core';
import { contentData } from '../../data/content-data';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteLanguageService } from '../../shared/services/site-language';

@Component({
  selector: 'app-next-steps-section',
  imports: [FeatureCard],
  templateUrl: './next-steps-section.html',
  styleUrl: './next-steps-section.scss',
})
export class NextStepsSection {
  private language = inject(SiteLanguageService);

  readonly lang = this.language.lang;
  readonly brand = contentData.brand;

  get content() {
    return contentData.showcase[this.lang()].nextSteps;
  }

  trackCard(index: number) {
    return index;
  }
}
