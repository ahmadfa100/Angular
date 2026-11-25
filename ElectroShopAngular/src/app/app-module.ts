import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header-component/header-component';
import { NavbarComponent } from './navbar-component/navbar-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { FooterComponent } from './footer-component/footer-component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [App],
})
export class AppModule {}
