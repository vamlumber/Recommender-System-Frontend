import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SearchResultComponent} from './search-result/search-result.component'


const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },{ 
    path: 'search/:searchstring', 
    component: SearchResultComponent
  } 
  //   path: 'search/:searchstring', 
  //   component: SearchResultComponent
  // }
  // {
  //   path: 'about',
  //   loadChildren: 'app/about/about.module#AboutModule'
  // },
  // { path: 'contact', component: ContactComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
