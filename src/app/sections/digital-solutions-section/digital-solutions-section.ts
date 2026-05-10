import { Component, inject } from '@angular/core';
import { contentData } from '../../data/content-data';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteLanguageService } from '../../shared/services/site-language';

@Component({
  selector: 'app-digital-solutions-section',
  imports: [FeatureCard],
  templateUrl: './digital-solutions-section.html',
  styleUrl: './digital-solutions-section.scss',
})
export class DigitalSolutionsSection {
  private language = inject(SiteLanguageService);

  readonly lang = this.language.lang;
  readonly brand = contentData.brand;

  get content() {
    return contentData.showcase[this.lang()].demos;
  }

  trackCard(index: number) {
    return index;
  }
}
