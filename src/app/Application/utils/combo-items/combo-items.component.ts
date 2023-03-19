import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/Application/services/combo/common.service';

@Component({
  selector: 'app-combo-items',
  templateUrl: './combo-items.component.html',
  styleUrls: ['./combo-items.component.css'],
})
export class ComboItemsComponent implements OnInit {
  @Input() url!: String;
  @Input() ServiceEnd: any;
  @Input() label: any;
  @Input() control!: any;
  @Output() valueChange = new EventEmitter();

  items: any;
  constructor(private service: CommonService) {}
  ngOnInit() {
    this.service.getData(this.url).subscribe((resp) => {
      this.items = resp.data;
    });
  }
}
