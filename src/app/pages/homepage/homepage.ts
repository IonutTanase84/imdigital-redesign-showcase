import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { ScrollShowcaseSection } from '../../sections/scroll-showcase-section/scroll-showcase-section';

@Component({
  selector: 'app-homepage',
  imports: [Navbar, ScrollShowcaseSection],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
