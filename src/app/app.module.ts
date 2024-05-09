import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Newsection2Component } from './newsection2/newsection2.component';
import { MakeimpactComponent } from './makeimpact/makeimpact.component';
import { Section3Component } from './section3/section3.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Home2Component } from './home2/home2.component';
import { Header2Component } from './header2/header2.component';
import { MainComponent } from './main/main.component';
import { ConsulterDetailComponent } from './consulter-detail/consulter-detail.component';
import { AddComponent } from './add/add.component';
import { SuivreCasComponent } from './suivre-cas/suivre-cas.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ConsulterAdminComponent } from './consulter-admin/consulter-admin.component';
import { Element1Component } from './element1/element1.component';
import { Element2Component } from './element2/element2.component';
import { Element3Component } from './element3/element3.component';
import { Element4Component } from './element4/element4.component';
import { Element5Component } from './element5/element5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Section1Component,
    HeaderComponent,
    WelcomeComponent,
    Newsection2Component,
    MakeimpactComponent,
    Section3Component,
    FooterComponent,
    LogInComponent,
    SignUpComponent,
    Home2Component,
    Header2Component,
    MainComponent,
    ConsulterDetailComponent,
    AddComponent,
    SuivreCasComponent,
    ProfileComponent,
    ProfilAdminComponent,
    NotfoundComponent,
    ConsulterAdminComponent,
    Element1Component,
    Element2Component,
    Element3Component,
    Element4Component,
    Element5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
