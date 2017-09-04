import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { aboutcomponent }  from './about/about.component';
import { servicescomponent}  from './service/services.component';
import { headercomponent }  from './header/app.headercomponent';
import { footercomponent }  from './footer/footer.component';
import{navbarcomponent} from './navbar/navbar.component';
import { RouterModule ,Routes } from '@angular/router';
import{homecomponent } from './home/home.component';
import{PageNotFoundComponent} from './PageNotFoundComponent';

const appRoutes: Routes = [
  { path: 'home', redirectTo: 'Home'}, 
  { path: 'home', component: homecomponent },
  { path: 'about', component: aboutcomponent },
  { path: 'service', component: servicescomponent },
 
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];



@NgModule({
  imports:      [ BrowserModule ,FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,homecomponent,PageNotFoundComponent ,headercomponent,aboutcomponent,navbarcomponent,servicescomponent,footercomponent],
  bootstrap:    [ AppComponent ]


})
export class AppModule { }
