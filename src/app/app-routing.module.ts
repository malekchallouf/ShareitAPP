import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { Home2Component } from './home2/home2.component';
import { ConsulterDetailComponent } from './consulter-detail/consulter-detail.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { SuivreCasComponent } from './suivre-cas/suivre-cas.component';
import { ConsulterAdminComponent } from './consulter-admin/consulter-admin.component';
import { Element1Component } from './element1/element1.component';
import { ProfileComponent } from './profile/profile.component';
import { Element2Component } from './element2/element2.component';
import { Element3Component } from './element3/element3.component';
import { Element4Component } from './element4/element4.component';
import { Element5Component } from './element5/element5.component';
import { AddComponent } from './add/add.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { 
    path : '' , redirectTo:'home',pathMatch:'full' 
  },
  { path :'sign-up', component : SignUpComponent},
  { path :'consulter-detail', component : ConsulterDetailComponent},
  { path :'profil-admin', component : ProfilAdminComponent},
  { path :'suivre-cas', component : SuivreCasComponent},
  { path :'consulter-admin', component : ConsulterAdminComponent },
  {path :'log-in' , component : LogInComponent},
  { path :'profil', component : ProfileComponent},
  { path :'element1', component : Element1Component},
  { path :'element2', component : Element2Component},
  { path :'element3', component : Element3Component},
  { path :'element4', component : Element4Component},
  { path :'element5', component : Element5Component},
  {
    path :'home', component : HomeComponent 
   },
  {path :'log-in' , component : LogInComponent},
  { path :'add', component : AddComponent},
    
{
    path :'home2', component : Home2Component
  },
  {
    path :'**' ,component : NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
