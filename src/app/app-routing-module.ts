import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { HomeComponent } from "./shared/components/home/home.component";
import { EditAddCarComponent } from "./shared/components/edit-add-car/edit-add-car.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";

const routes: Routes = [
    // {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent,},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
    {path: 'list', component: EditAddCarComponent},
    // {path: '**', component: LoginComponent}
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})

export class AppRoutingModule {

}
