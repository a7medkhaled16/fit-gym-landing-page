import { Component } from '@angular/core';
import { ToggleBtn } from "../toggle-btn/toggle-btn";



@Component({
  selector: 'app-navbar',
  imports: [ToggleBtn],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  
  }
}
