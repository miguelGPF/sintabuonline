import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient,HttpClientModule} from '@angular/common/http';

/*translate*/ 
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



import {  OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl, OWL_DATE_TIME_FORMATS, DateTimeAdapter } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule, MomentDateTimeAdapter, OWL_MOMENT_DATE_TIME_FORMATS } from 'ng-pick-datetime-moment';

import { SpanishIntl } from './classes/DefaultIntl';
// components 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { GirlsComponent } from './components/home/girls/girls.component';
import { LoginComponent } from './components/login/login.component';
import { ValidateComponent } from './components/login/validate/validate.component';
import { GirlsLoginComponent } from './components/login/girls-login/girls-login.component';
import { PeopleLoginComponent } from './components/login/people-login/people-login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PeopleSignUpComponent } from './components/sign-up/people-sign-up/people-sign-up.component';
import { GirlsSignUpComponent } from './components/sign-up/girls-sign-up/girls-sign-up.component';
import { ValidationAgeComponent } from './components/home/validation-age/validation-age.component';
import { LandingComponent } from './components/landing/landing.component';
import { MensComponent } from './components/home/mens/mens.component';
import { SelectUserComponent } from './components/home/select-user/select-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GirlsComponent,
    LoginComponent,
    ValidateComponent,
    GirlsLoginComponent,
    PeopleLoginComponent,
    SignUpComponent,
    PeopleSignUpComponent,
    GirlsSignUpComponent,
    ValidationAgeComponent,
    LandingComponent,
    MensComponent,
    SelectUserComponent,
    
  ],
  imports: [
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OwlDateTimeModule,
    BrowserAnimationsModule,
    OwlMomentDateTimeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
        },
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es' },
    { provide: OwlDateTimeIntl, useClass: SpanishIntl },
    { provide: DateTimeAdapter, useClass: MomentDateTimeAdapter },
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_MOMENT_DATE_TIME_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
