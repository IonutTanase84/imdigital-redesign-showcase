import { Component } from '@angular/core';
import { contentData } from '../../data/content-data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly content = contentData.footer;
  readonly year = new Date().getFullYear();
}
