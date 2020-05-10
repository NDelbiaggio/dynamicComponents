import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bootstrap-card",
  templateUrl: "./bootstrap-card.component.html",
  styleUrls: ["./bootstrap-card.component.scss"],
})
export class BootstrapCardComponent implements OnInit {
  @Output() liked: EventEmitter<any>;

  constructor() {
    this.liked = new EventEmitter();
  }

  ngOnInit(): void {}

  likePost() {
    this.liked.emit();
  }
}
