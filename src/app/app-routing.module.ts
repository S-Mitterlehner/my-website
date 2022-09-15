import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from './pages/home-page/education-page/education-page.component';
import { ExperiencesPageComponent } from './pages/home-page/experiences-page/experiences-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IntroPageComponent } from './pages/home-page/intro-page/intro-page.component';
import { TechStackPageComponent } from './pages/home-page/tech-stack-page/tech-stack-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';
import { ReferencePageComponent } from './pages/reference-page/reference-page.component';

const routes: Routes = [
  { path:'', component: HomePageComponent, data: {animation: 'navigateAnimation1', openAboutMe: true}, children: [
    {path: '', component: IntroPageComponent, data: { animation: 'subNavigateAnimation1', openAboutMe: true }},
    {path: 'tech-stack', component: TechStackPageComponent, data: { animation: 'subNavigateAnimation2',openAboutMe: true }},
    {path: 'experiences', component: ExperiencesPageComponent, data: { animation: 'subNavigateAnimation3',openAboutMe: true } },
    {path: 'education', component: EducationPageComponent, data: { animation: 'subNavigateAnimation4',openAboutMe: true } }
  ] },
  { path:'references', component: ReferencePageComponent, data: {animation: 'navigateAnimation2'} },
  { path:'imprint', component: ImprintPageComponent, data: {animation: 'navigateAnimation3'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
