import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { EnfantComponent } from './enfant/enfant.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppareilComponent } from './appareil/appareil.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import  { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReactiveFormsModule }    from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    EnfantComponent,
    AppareilComponent,
    HeroesComponent,
    ProductDetailsComponent,
    MyNavComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ang4-seo'}),
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
