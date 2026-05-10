import { Injectable, signal } from '@angular/core';
import { SiteLanguage } from '../types/site-language';

const LANG_KEY = 'imdigital:lang';

@Injectable({ providedIn: 'root' })
export class SiteLanguageService {
  readonly lang = signal<SiteLanguage>('en');

  setLanguage(lang: SiteLanguage) {
    this.lang.set(lang);

    document.documentElement.lang = lang;
    document.documentElement.dataset['lang'] = lang;

    this.save(LANG_KEY, lang);
  }

  getStoredLanguage(): SiteLanguage {
    return this.read(LANG_KEY) === 'ro' ? 'ro' : 'en';
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
