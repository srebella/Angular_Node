import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notifier: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(): void {
    this.notifier.emit('mas bien loquita');//event bubbling
  }
}
