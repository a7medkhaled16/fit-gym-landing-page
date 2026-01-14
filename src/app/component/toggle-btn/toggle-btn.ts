import { Component, inject } from '@angular/core';
import { Toggleservice } from './toggleservice';

@Component({
  selector: 'app-toggle-btn',
  imports: [],
  templateUrl: './toggle-btn.html',
  styleUrl: './toggle-btn.css',
})
export class ToggleBtn {

toggleservice = inject(Toggleservice);

  toggle(): void {
    this.toggleservice.toggleTheme();
  }
}
