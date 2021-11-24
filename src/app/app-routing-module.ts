import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { ListComponent } from "./shared/components/list/list.component";
import { LoginComponent } from "./shared/components/login/login.component";
import { SignupComponent } from "./shared/components/signup/signup.component";

const routes: Routes = [
    // {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    // {path: '**', component: LoginComponent}
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})

export class AppRoutingModule {

}
