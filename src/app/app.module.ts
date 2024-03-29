import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponentComponent } from './components/admin-component/admin-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PipeModule } from './pipes/pipe/pipe.module';
import { AdsenseModule } from 'ng2-adsense';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    NgxLoadingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TableModule,
    PipeModule,
    AdsenseModule.forRoot()
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
