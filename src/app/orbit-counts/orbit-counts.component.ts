import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";
import { enableProdMode } from "@angular/core";

enableProdMode();

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  @Input() search;

  constructor() {}

  ngOnInit() {}

  countByType(type: string): number {
    let count: number = 0;
    if (this.satellites) {
      for (let i: number = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type === type) {
          count++;
        }
      }
      return count;
    }
  }
}
