import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './not-found.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { ScrollableDirective } from './shared/directives/scrollable/scrollable.directive';
import { LayoutModule } from './shared/layout/layout.module';
import { ThanksComponent } from './shared/thanks.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ScrollableDirective,
    ThanksComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-app' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    AngularFireAuthGuardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
