import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-container',
  templateUrl: './plan-container.component.html',
  styleUrls: ['./plan-container.component.css'],
})
export class PlanContainerComponent {
  @Input() planDetails: any;
}
