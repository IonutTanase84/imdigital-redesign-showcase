import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { AppButton } from '../app-button/app-button';
import {
  faArrowRight,
  faBrain,
  faCircleQuestion,
  faCode,
  faCoins,
  faDesktop,
  faEye,
  faIdBadge,
  faLaptopCode,
  faMagnet,
  faMicrochip,
  faRoute,
  faShieldHalved,
  faUsersViewfinder,
} from '@fortawesome/free-solid-svg-icons';

export type FeatureCardIcon =
  | 'route'
  | 'magnet'
  | 'coins'
  | 'scan-face'
  | 'brain'
  | 'user-scan'
  | 'code-window'
  | 'eye'
  | 'chip'
  | 'badge-check'
  | 'laptop-code'
  | 'devices'
  | 'help-square';

@Component({
  selector: 'app-feature-card',
  imports: [FaIconComponent, AppButton],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCard {
  title = input.required<string>();
  icon = input.required<FeatureCardIcon>();
  hoverText = input.required<string>();
  showCheckbox = input(false);
  variant = input<'default' | 'compact' | 'featured' | 'floating'>('default');

  readonly icons: Record<FeatureCardIcon, IconDefinition> = {
    route: faRoute,
    magnet: faMagnet,
    coins: faCoins,
    'scan-face': faUsersViewfinder,
    brain: faBrain,
    'user-scan': faIdBadge,
    'code-window': faCode,
    eye: faEye,
    chip: faMicrochip,
    'badge-check': faShieldHalved,
    'laptop-code': faLaptopCode,
    devices: faDesktop,
    'help-square': faCircleQuestion,
  };

  readonly actionIcon = faArrowRight;

  readonly iconColors: Record<FeatureCardIcon, string> = {
    route: 'var(--feature-icon-route)',
    magnet: 'var(--feature-icon-magnet)',
    coins: 'var(--feature-icon-coins)',
    'scan-face': 'var(--feature-icon-scan-face)',
    brain: 'var(--feature-icon-brain)',
    'user-scan': 'var(--feature-icon-user-scan)',
    'code-window': 'var(--feature-icon-code-window)',
    eye: 'var(--feature-icon-eye)',
    chip: 'var(--feature-icon-chip)',
    'badge-check': 'var(--feature-icon-badge-check)',
    'laptop-code': 'var(--feature-icon-laptop-code)',
    devices: 'var(--feature-icon-devices)',
    'help-square': 'var(--feature-icon-help-square)',
  };
}
