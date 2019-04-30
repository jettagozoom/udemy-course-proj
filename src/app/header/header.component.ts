import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  featureName = 'recipes';

  constructor() { }

  ngOnInit() {
    this.featureSelected.emit(this.featureName);
  }

  onSelectTab(feature: string) {
    this.featureName = feature;
    this.featureSelected.emit(feature);
  }
}
