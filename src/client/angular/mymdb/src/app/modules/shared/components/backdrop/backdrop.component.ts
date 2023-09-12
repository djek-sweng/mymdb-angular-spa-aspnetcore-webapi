import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css'],
})
export class BackdropComponent {
  @Input() visible = false;
}
