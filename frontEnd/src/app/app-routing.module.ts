import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { FolderComponent } from './folder/folder.component';
import { NewFilesComponent } from './new-files/new-files.component';
import { EditFileComponent } from './edit-file/edit-file.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'folder',
    component: FolderComponent ,
    canActivate:[AuthGuard]
  },
  {
    path:'add',
    component: NewFilesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"edit/:f_id",
    component: EditFileComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
