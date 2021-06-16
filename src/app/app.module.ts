import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { StorageService } from './services/local-storage.service';
import { toggleThemeService } from './services/toggle-theme.service';



export function themeFactory(themeService: toggleThemeService) {
  return () => themeService.setThemeOnStart();
}


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent
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
