import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SearchResultComponent} from './search-result/search-result.component'
import{SelectedEntryComponent} from './selected-entry/selected-entry.component'
import{RecommendComponent} from './recommend/recommend.component'
import {ProjectSketchComponent} from './project-sketch/project-sketch.component'

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },{ 
    path: 'search', 
    component: SearchResultComponent
  },{ 
    path: 'report', 
  component: SelectedEntryComponent
  },{
    path:'recommend',
    component:RecommendComponent,
    data:{}
  },
  {
    path:'project-sketch',
    component:ProjectSketchComponent
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
