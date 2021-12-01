import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { SignupComponent } from './shared/components/signup/signup.component';
import { AppRoutingModule } from './app-routing-module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { EditAddCarComponent} from './shared/components/edit-add-car/edit-add-car.component';
import { HomeComponent } from './shared/components/home/home.component';



registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EditAddCarComponent,
    HomeComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  // exports: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
