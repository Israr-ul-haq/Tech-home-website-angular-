import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { HeroComponent } from './MyComponents/hero/hero.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { ServicesComponent } from './MyComponents/services/services.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { ClientsComponent } from './MyComponents/clients/clients.component';
import { BlogsComponent } from './MyComponents/blogs/blogs.component';
import { ContactusComponent } from './MyComponents/contactus/contactus.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,

    HeroComponent,
    AboutUsComponent,
    ServicesComponent,
    ProjectsComponent,
    ClientsComponent,
    BlogsComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HeroComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'blogs', component: BlogsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent, FormsModule],
})
export class AppModule {}
