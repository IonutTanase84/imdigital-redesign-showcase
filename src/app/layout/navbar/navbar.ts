import {
  Component,
  ElementRef,
  HostListener,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { contentData } from '../../data/content-data';
import { LogoIcon } from '../../shared/components/logo-icon/logo-icon';
import { SiteLanguageService } from '../../shared/services/site-language';
import { SiteLanguage } from '../../shared/types/site-language';

type Theme = 'dark' | 'light';

const THEME_KEY = 'imdigital:theme';

type TextKey = keyof (typeof contentData.navigation.text)['en'];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LogoIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private language = inject(SiteLanguageService);

  navbar = viewChild.required<ElementRef<HTMLElement>>('navbar');
  mobileMenu = viewChild.required<ElementRef<HTMLElement>>('mobileMenu');

  theme = signal<Theme>('dark');
  lang = this.language.lang;
  isMobileOpen = signal(false);
  openMobileMenuId = signal<string | null>(null);

  brand = contentData.brand;
  items = contentData.navigation.items;

  openDesktopMenu?: HTMLElement;

  constructor() {
    afterNextRender(() => {
      this.setTheme(this.getStoredTheme());
      this.setLanguage(this.language.getStoredLanguage());
      this.hideMobileMenu();
    });
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: MouseEvent) {
    const clickedInsideNavbar = this.navbar().nativeElement.contains(event.target as Node);

    if (!clickedInsideNavbar) {
      this.closeDesktopMenu();
      this.closeMobileMenu();
    }
  }

  t(key: string) {
    return contentData.navigation.text[this.lang()][key as TextKey] ?? key;
  }

  toggleTheme() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  toggleLanguage() {
    this.setLanguage(this.lang() === 'en' ? 'ro' : 'en');
    this.closeDesktopMenu();
    this.openMobileMenuId.set(null);
  }

  languageButtonText() {
    return this.lang() === 'en' ? 'RO' : 'EN';
  }

  themeButtonText() {
    return this.theme() === 'dark' ? '☀' : '☾';
  }

  goHome() {
    this.closeDesktopMenu();
    this.closeMobileMenu();
    window.dispatchEvent(new CustomEvent('imdigital:go-home-slide'));
  }

  openDesktopSubmenu(menu: HTMLElement) {
    this.showMenu(menu);
  }

  toggleMobileMenu(event: MouseEvent) {
    event.stopPropagation();

    this.isMobileOpen() ? this.closeMobileMenu() : this.openMobileMenu();
  }

  toggleMobileSubmenu(menuId: string, event: MouseEvent) {
    event.stopPropagation();

    if (this.openMobileMenuId() === menuId) {
      this.openMobileMenuId.set(null);
      return;
    }

    this.openMobileMenuId.set(menuId);

    requestAnimationFrame(() => {
      const submenu = this.mobileMenu().nativeElement.querySelector('.mobile-submenu-inner');
      const links = this.mobileMenu().nativeElement.querySelectorAll('.mobile-submenu-inner a');

      gsap.killTweensOf([submenu, links]);

      gsap.fromTo(
        submenu,
        { autoAlpha: 0, height: 0, y: -6 },
        { autoAlpha: 1, height: 'auto', y: 0, duration: 0.42, ease: 'power2.out' },
      );

      gsap.fromTo(
        links,
        { autoAlpha: 0, y: -4 },
        { autoAlpha: 1, y: 0, duration: 0.36, stagger: 0.055, delay: 0.08, ease: 'power2.out' },
      );
    });
  }

  openMobileMenu() {
    this.closeDesktopMenu();
    this.isMobileOpen.set(true);
    document.body.style.overflow = 'hidden';

    const menu = this.mobileMenu().nativeElement;

    gsap.killTweensOf(menu);
    gsap.set(menu, { display: 'block', pointerEvents: 'auto' });
    gsap.fromTo(
      menu,
      { autoAlpha: 0, y: -10 },
      { autoAlpha: 1, y: 0, duration: 0.36, ease: 'power3.out' },
    );
  }

  closeMobileMenu() {
    if (!this.isMobileOpen()) return;

    const menu = this.mobileMenu().nativeElement;

    gsap.killTweensOf(menu);
    gsap.to(menu, {
      autoAlpha: 0,
      y: -10,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => this.hideMobileMenu(),
    });
  }

  closeDesktopMenu() {
    if (this.openDesktopMenu) {
      this.closeMenu(this.openDesktopMenu);
    }
  }

  private showMenu(menu: HTMLElement) {
    if (this.openDesktopMenu && this.openDesktopMenu !== menu) {
      this.hideMenu(this.openDesktopMenu);
    }

    this.openDesktopMenu = menu;

    const links = menu.querySelectorAll('a');

    gsap.killTweensOf([menu, links]);
    gsap.set(menu, { display: 'block', pointerEvents: 'auto' });

    gsap.to(menu, { autoAlpha: 1, x: 0, duration: 0.35, ease: 'power3.out' });

    gsap.fromTo(
      links,
      { autoAlpha: 0, x: -22 },
      { autoAlpha: 1, x: 0, duration: 0.35, stagger: 0.055, ease: 'power3.out' },
    );
  }

  private closeMenu(menu: HTMLElement) {
    const links = menu.querySelectorAll('a');

    gsap.killTweensOf([menu, links]);

    gsap.to(links, {
      autoAlpha: 0,
      x: -18,
      duration: 0.18,
      stagger: 0.025,
      ease: 'power2.in',
    });

    gsap.to(menu, {
      autoAlpha: 0,
      x: -32,
      duration: 0.25,
      delay: 0.08,
      ease: 'power2.in',
      onComplete: () => {
        this.hideMenu(menu);

        if (this.openDesktopMenu === menu) {
          this.openDesktopMenu = undefined;
        }
      },
    });
  }

  private hideMenu(menu: HTMLElement) {
    const links = menu.querySelectorAll('a');

    gsap.killTweensOf([menu, links]);

    gsap.set(menu, {
      autoAlpha: 0,
      display: 'none',
      pointerEvents: 'none',
      x: -32,
    });

    gsap.set(links, {
      autoAlpha: 0,
      x: -18,
    });
  }

  private hideMobileMenu() {
    const menu = this.mobileMenu().nativeElement;

    this.isMobileOpen.set(false);
    this.openMobileMenuId.set(null);
    document.body.style.overflow = '';

    gsap.set(menu, {
      autoAlpha: 0,
      display: 'none',
      pointerEvents: 'none',
      y: -10,
    });
  }

  private setTheme(theme: Theme) {
    this.theme.set(theme);

    document.documentElement.classList.toggle('theme-dark', theme === 'dark');
    document.documentElement.classList.toggle('theme-light', theme === 'light');
    document.documentElement.dataset['theme'] = theme;

    this.save(THEME_KEY, theme);
  }

  private setLanguage(lang: SiteLanguage) {
    this.language.setLanguage(lang);
  }

  private getStoredTheme(): Theme {
    return this.read(THEME_KEY) === 'light' ? 'light' : 'dark';
  }

  private read(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private save(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  }
}
