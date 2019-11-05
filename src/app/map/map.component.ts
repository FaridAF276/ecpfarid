import { Component, OnInit } from '@angular/core';
declare let L;
declare let tomtom: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = tomtom.L.map('map', {
      key: 'IXJ9JJzlzyRAsBuhy8wESw33Q8b2esZ5',
      basePath: '../../assets/sdk',
      center: [ 52.360306, 4.876935 ],
      zoom: 15,
      source : 'vector'
    });
  }

}
