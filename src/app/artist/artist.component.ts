import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from '../artist.model';
import { SpotifyService } from '../core/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  
  artista: Artist;
    constructor(
    private service: SpotifyService,
    private route: ActivatedRoute 
            ) { }


  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.artista = this.service.getArtits(id);

    });

  }

}
