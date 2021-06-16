import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';

import { HeaderComponent } from './header/header.component';
import { StorageService } from './services/local-storage.service';
import { toggleThemeService } from './services/toggle-theme.service';



export function themeFactory(themeService: toggleThemeService) {
  return () => themeService.setThemeOnStart();
}

// <IfModule mod_rewrite.c>
// RewriteEngine On
// RewriteBase /
// RewriteRule ^index\.html$ - [L]
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteCond %{REQUEST_FILENAME} !-d
// RewriteRule . /index.html [L]
// </IfModule>



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,

    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    toggleThemeService,
    StorageService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [toggleThemeService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
