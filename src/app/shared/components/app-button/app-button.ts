import { Component, input, output } from '@angular/core';

type ButtonVariant = 'light' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss',
})
export class AppButton {
  label = input<string>('');
  pressed = output<void>();

  type = input<'button' | 'submit' | 'reset'>('button');
  variant = input<ButtonVariant>('light');
  size = input<ButtonSize>('md');

  trackingName = input<string>('');
  ariaLabel = input<string>('');
}
