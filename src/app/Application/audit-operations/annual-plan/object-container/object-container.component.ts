import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-object-container',
  templateUrl: './object-container.component.html',
  styleUrls: ['./object-container.component.css'],
})
export class ObjectContainerComponent {
  @Input() auditObject: any;
}
