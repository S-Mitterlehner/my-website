import { Injectable } from '@angular/core';
import { HeroListItem } from '../models/hero-list-item.model';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  getReferences(): HeroListItem[] {
    return [
      {
        title: 'Time Tracker for VS Code',
        description:
          'Track work time within the repository, directly from VS Code',
        link: 'https://marketplace.visualstudio.com/items?itemName=S-Mitterlehner.time-tracker-vscode',
        imagePath: 'assets/references/time-tracker-vscode.png',
        tech: [
          {
            name: 'TypeScript',
            icon: 'assets/tech/ts.svg',
          },
        ],
      },
      {
        title: 'Website: Trafik Mitterlehner',
        description: 'Online presence for "Trafik Mitterlehner"',
        imagePath: 'assets/references/trafik.jpg',
        link: 'https://www.trafik-mitterlehner.at/',
        tech: [
          {
            name: 'Angular',
            icon: 'assets/tech/angular.svg',
          },
        ],
      },
      {
        title: 'Product Information System',
        description:
          'Many extensions of the product information system of a big austrian company, including a mass-change tool and a generic exporter',
        imagePath: 'assets/references/placeholder.png',
        link: undefined,
        tech: [
          {
            name: 'C#',
            icon: 'assets/tech/csharp.svg',
          },
          {
            name: 'WPF',
            icon: 'assets/tech/wpf.png',
          },
          {
            name: 'Microsoft SQL',
            icon: 'assets/tech/mssql.svg',
          },
        ],
      },
      {
        title: 'Phonebook',
        description:
          'Internal Phonebook for a big austrian company, including employee-, store-, department data and translation.',
        imagePath: 'assets/references/placeholder.png',
        link: undefined,
        tech: [
          {
            name: 'Angular',
            icon: 'assets/tech/angular.svg',
          },
          {
            name: 'C#',
            icon: 'assets/tech/csharp.svg',
          },
          {
            name: 'ASP.NET',
            icon: 'assets/tech/aspnet.svg',
          },
          {
            name: 'Microsoft SQL',
            icon: 'assets/tech/mssql.svg',
          },
        ],
      },
      {
        title: 'My Portfolio',
        description: 'This Website ;)',
        imagePath: 'assets/references/portfolio.jpg',
        link: undefined,
        tech: [
          {
            name: 'Angular',
            icon: 'assets/tech/angular.svg',
          },
        ],
      },
      {
        title: 'In Memoriam: Christian Mitterlehner',
        description: 'In Memoriam Page for my father who died 2018',
        imagePath: 'assets/references/memoriam.jpg',
        link: 'https://christian.mitterlehner.click/',
        tech: [
          {
            name: 'HTML',
            icon: 'assets/tech/html.svg',
          },
          {
            name: 'CSS',
            icon: 'assets/tech/css.svg',
          },
          {
            name: 'JavaScript',
            icon: 'assets/tech/js.svg',
          },
        ],
      },
    ];
  }
}
