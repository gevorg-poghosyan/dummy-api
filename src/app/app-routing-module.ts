import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./index/login/login.component";
import { SignupComponent } from "./index/signup/signup.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})

export class AppRoutingModule {

}