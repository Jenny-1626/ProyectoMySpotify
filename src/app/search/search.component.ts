import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artist = [
    {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx"
    },
    "followers": {
      "href": null,
      "total": 2583641
    },
    "genres": [
      "canadian electronic",
      "edm",
      "electro house",
      "pop dance",
      "progressive house"
    ],
    "href": "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx",
    "id": "2CIMQHirSU0MQqyYHq0eOx",
    "images": [
    {
    "height": 640,
    "url":
    "https://i.scdn.co/image/00de6379faa5c8b1006fe858cea1b2916b90352b",
    "width": 640
    },
    {
    "height": 320,
    "url":
    "https://i.scdn.co/image/88ff724abdd8347723397d535971219d3155ad46",
    "width": 320
    },
    {
    "height": 160,
    "url":
    "https://i.scdn.co/image/aadbfa4db66928b01332f4bc07825e2deaaf814f",
    "width": 160
    }
    ],
    "name": "deadmau5",
    "popularity": 71,
    "type": "artist",
    "uri": "spotify:artist:2CIMQHirSU0MQqyYHq0eOx"
    },
    {
    "external_urls": {
    "spotify": "https://open.spotify.com/artist/57dN52uHvrHOxijzpIgu3E"
    },
    "followers": {
    "href": null,
    "total": 538932
    },
    "genres": [
    "alternative dance",
    "dance-punk",
    "indietronica",
    "new rave"
    ],
    "href": "https://api.spotify.com/v1/artists/57dN52uHvrHOxijzpIgu3E",
    "id": "57dN52uHvrHOxijzpIgu3E",
    "images": [
    {
    "height": 693,
    "url":
    "https://i.scdn.co/image/2f0c6c465a83cd196e651e3d4e7625ba799a6f60",
    "width": 1000
    },
    {
    "height": 444,
    "url":
    "https://i.scdn.co/image/4e3e13c8b993bde9898e49509fb9ae121636e05f",
    "width": 640
    },
    {
    "height": 139,
    "url":
    "https://i.scdn.co/image/dc68dd24b45b74ecce9d4ed486423673d683ced3",
    "width": 200
    },
    {
    "height": 44,
    "url":
    "https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc",
    "width": 63
    }
    ],
    "name": "Ratatat",
    "popularity": 71,
    "type": "artist",
    "uri": "spotify:artist:57dN52uHvrHOxijzpIgu3E"
    },
    {
    "external_urls": {
    "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
    },
    "followers": {
    "href": null,
    "total": 19513455
    },
    "genres": [
    "dance pop",
    "edm",
    "pop",
    "pop dance"
    ],
    "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
    "id": "1vCWHaC5f2uS3yhpwWbIA6",
    "images": [
    {
    "height": 640,
    "url":
    "https://i.scdn.co/image/81b19a403109c4fe528ee3972137127b85be9519",
    "width": 640
    },
    {
    "height": 320,
    "url":
    "https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2",
    "width": 320
    },
    {
    "height": 160,
    "url":
    "https://i.scdn.co/image/c55bc6f57b6bb297425c3ae694f92672dcf0e2c2",
    "width": 160
    }
    ],
    "name": "Avicii",
    "popularity": 85,
    "type": "artist",
    "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
    }
    ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
