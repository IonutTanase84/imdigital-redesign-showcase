import { Component, inject, output } from '@angular/core';
import { contentData } from '../../data/content-data';
import { AppButton } from '../../shared/components/app-button/app-button';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteLanguageService } from '../../shared/services/site-language';

@Component({
  selector: 'app-hero-section',
  imports: [AppButton, FeatureCard],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private language = inject(SiteLanguageService);

  ctaSelected = output<void>();

  readonly lang = this.language.lang;
  readonly heroBadges = contentData.heroBadges;

  get hero() {
    return contentData.hero[this.lang()];
  }

  get titlePrefix() {
    return this.hero.title.replace(contentData.brand.heroTitleHighlight, '').trim();
  }

  readonly titleHighlight = contentData.brand.heroTitleHighlight;
}
