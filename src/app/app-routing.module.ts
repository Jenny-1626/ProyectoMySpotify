import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'artist/:id',
    component: ArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
