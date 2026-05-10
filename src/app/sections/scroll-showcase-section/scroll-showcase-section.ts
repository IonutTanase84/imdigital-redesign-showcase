import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { contentData } from '../../data/content-data';
import { Footer } from '../../layout/footer/footer';
import { SiteLanguageService } from '../../shared/services/site-language';
import { DigitalSolutionsSection } from '../digital-solutions-section/digital-solutions-section';
import { HeroSection } from '../hero-section/hero-section';
import { KnowMoreSection } from '../know-more-section/know-more-section';
import { NextStepsSection } from '../next-steps-section/next-steps-section';

type ShowcasePanelKey = 'hero' | 'demos' | 'knowMore' | 'nextSteps';
type ShowcasePanel = {
  key: ShowcasePanelKey;
};
type PanelElements = {
  panel: HTMLElement;
  content: HTMLElement;
};

@Component({
  selector: 'app-scroll-showcase-section',
  imports: [HeroSection, DigitalSolutionsSection, KnowMoreSection, NextStepsSection, Footer],
  templateUrl: './scroll-showcase-section.html',
  styleUrl: './scroll-showcase-section.scss',
})
export class ScrollShowcaseSection implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly language = inject(SiteLanguageService);

  panelElements = viewChildren<ElementRef<HTMLElement>>('showcasePanel');
  contentElements = viewChildren<ElementRef<HTMLElement>>('panelContent');

  readonly panels: ShowcasePanel[] = [
    { key: 'hero' },
    { key: 'demos' },
    { key: 'knowMore' },
    { key: 'nextSteps' },
  ];

  activeIndex = signal(0);
  visiblePanelIndex = signal(0);
  activePanelKey = computed(() => this.panels[this.activeIndex()]?.key ?? 'hero');
  ui = computed(() => contentData.showcaseUi[this.language.lang()]);

  private isAnimating = false;
  private touchStartY = 0;
  private readonly wheelThreshold = 18;
  private readonly touchThreshold = 42;

  ngAfterViewInit() {
    this.preparePanels();
    this.destroyRef.onDestroy(() => {
      gsap.killTweensOf([
        ...this.panelElements().map((panel) => panel.nativeElement),
        ...this.contentElements().map((content) => content.nativeElement),
      ]);
    });
  }

  @HostListener('window:imdigital:go-home-slide')
  onGoHomeSlide() {
    this.goTo(0);
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (Math.abs(event.deltaY) < this.wheelThreshold) {
      return;
    }

    this.navigateBy(event.deltaY > 0 ? 1 : -1);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0]?.clientY ?? 0;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0]?.clientY ?? this.touchStartY;
    const delta = this.touchStartY - touchEndY;

    if (Math.abs(delta) < this.touchThreshold) {
      return;
    }

    this.navigateBy(delta > 0 ? 1 : -1);
  }

  goTo(index: number) {
    const currentIndex = this.visiblePanelIndex();
    const targetIndex = Math.max(0, Math.min(index, this.panels.length - 1));

    if (this.isAnimating || targetIndex === currentIndex) {
      return;
    }

    const current = this.getPanelElements(currentIndex);
    const target = this.getPanelElements(targetIndex);

    if (!current || !target) {
      return;
    }

    const goingDown = targetIndex > currentIndex;
    const enteringFrom = goingDown ? 100 : -100;
    const leavingTo = goingDown ? -100 : 100;

    this.isAnimating = true;
    this.activeIndex.set(targetIndex);

    gsap.killTweensOf([current.panel, current.content, target.panel, target.content]);
    gsap.set(target.panel, { autoAlpha: 1, pointerEvents: 'auto', yPercent: enteringFrom });
    gsap.set(target.content, { autoAlpha: 0, y: goingDown ? 70 : -70 });

    const timeline = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        this.visiblePanelIndex.set(targetIndex);
        gsap.set(current.panel, { autoAlpha: 0, pointerEvents: 'none' });
        this.isAnimating = false;
      },
    });

    timeline
      .to(current.content, { autoAlpha: 0, y: goingDown ? -78 : 78, duration: 0.48 }, 0)
      .to(current.panel, { yPercent: leavingTo, duration: 0.9 }, 0.08)
      .to(target.panel, { yPercent: 0, duration: 0.9 }, 0.08)
      .to(target.content, { autoAlpha: 1, y: 0, duration: 0.58 }, 0.48)
      .fromTo(
        target.content.querySelectorAll('.stage-reveal'),
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.56, stagger: 0.075 },
        0.6,
      );
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
      event.preventDefault();
      this.navigateBy(1);
    }

    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      this.navigateBy(-1);
    }
  }

  private navigateBy(step: -1 | 1) {
    this.goTo(this.activeIndex() + step);
  }

  private preparePanels(targetIndex = 0) {
    this.activeIndex.set(targetIndex);
    this.visiblePanelIndex.set(targetIndex);

    const panels = this.panelElements().map((panel) => panel.nativeElement);
    const contents = this.contentElements().map((content) => content.nativeElement);

    gsap.set(panels, { autoAlpha: 0, pointerEvents: 'none', yPercent: 100 });
    gsap.set(contents, { autoAlpha: 0, y: 40 });
    gsap.set(panels[targetIndex], { autoAlpha: 1, pointerEvents: 'auto', yPercent: 0 });
    gsap.set(contents[targetIndex], { autoAlpha: 1, y: 0 });
    gsap.set(contents[targetIndex].querySelectorAll('.stage-reveal'), { autoAlpha: 1, y: 0 });
  }

  private getPanelElements(index: number): PanelElements | null {
    const panel = this.panelElements()[index]?.nativeElement;
    const content = this.contentElements()[index]?.nativeElement;

    if (!panel || !content) {
      return null;
    }

    return { panel, content };
  }
}
