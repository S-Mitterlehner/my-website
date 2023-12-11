import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FancyNavComponent } from './components/fancy-nav/fancy-nav.component';
import { ReferencePageComponent } from './pages/reference-page/reference-page.component';
import { ChronologicalListComponent } from './components/chronological-list/chronological-list.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { TechStackItemComponent } from './components/tech-stack-item/tech-stack-item.component';
import { TechStackPageComponent } from './pages/home-page/tech-stack-page/tech-stack-page.component';
import { ExperiencesPageComponent } from './pages/home-page/experiences-page/experiences-page.component';
import { EducationPageComponent } from './pages/home-page/education-page/education-page.component';
import { IntroPageComponent } from './pages/home-page/intro-page/intro-page.component';
import { SocialMediaButtonComponent } from './components/social-media-button/social-media-button.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroComponent } from './components/hero-list/hero/hero.component';
import { TechStackItemSmallComponent } from './components/tech-stack-item-small/tech-stack-item-small.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { PopupComponent } from './components/popup/popup.component';
import { YearAmountPipe } from './pipes/year-amount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageSelectionComponent } from './components/language-selection/language-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    HeaderComponent,
    FancyNavComponent,
    ReferencePageComponent,
    ChronologicalListComponent,
    TechStackComponent,
    TechStackItemComponent,
    TechStackPageComponent,
    ExperiencesPageComponent,
    EducationPageComponent,
    IntroPageComponent,
    SocialMediaButtonComponent,
    HeroListComponent,
    HeroComponent,
    TechStackItemSmallComponent,
    ImprintPageComponent,
    PopupComponent,
    YearAmountPipe,
    LanguageSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
