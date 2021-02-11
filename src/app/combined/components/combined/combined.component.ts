import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.css']
})
export class CombinedComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
