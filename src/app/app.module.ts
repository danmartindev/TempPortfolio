import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';
import { MatComponentsModule } from './Materials/mat-components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  // { path: 'home', component: HomeComponent},
  { path: 'work', component: WorkComponent},
  { path: '',
    redirectTo: '/work',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    WorkComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatComponentsModule, 
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
