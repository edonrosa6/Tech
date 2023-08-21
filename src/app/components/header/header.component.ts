import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    if (window.scrollY > 0) {
      return "bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-200 shadow-md"
    } else {
      return "bg-transparent"
    }
  }
}
