import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from  '@angular/common/http';
import { DummyApiService } from './shared/services/dummy-api.service';
import { DummyApiComponent } from './dummy-api/dummy-api.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDemoModalBasicComponent } from './pop-up/pop-up.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecondComponent,
    DummyApiComponent,
    NzDemoModalBasicComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  // exports: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
