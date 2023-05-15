import { Injectable } from '@angular/core';
import { ChronologicalListItem } from '../models/chronological-list-item.model';
import { KnowledgeLevel, TechStackCategory } from '../models/tech-stack-item.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  getWorkingExperiences(): ChronologicalListItem[] {
    return [
      {
        from: '2023',
        to: 'Today',
        primaryText: 'Software Engineer',
        secondaryText: 'corner4 Information Technology GmbH (Traun)',
        icon: 'assets/software.svg',
        size: 'full',
        details: undefined
      },
      {
        from: '2017',
        to: '2023',
        primaryText: 'Full-Stack Developer',
        secondaryText: 'xxxldigital - Part of XXXLGroup KG (Wels/Linz)',
        icon: 'assets/software.svg',
        size: 'full',
        details: {
          tasks: [
            'Conzeption and planning of projects from business requests (also for other developers)'
            , 'Feature Implementation'
            , 'Performance Analysis'
            , 'Bugfixing / 3rd-Level-Support'
            , 'Buddy for new employees'
          ]
        }
      },
      {
        from: '2013',
        to: '2017',
        primaryText: 'Electrician (building technology)',
        secondaryText: 'Hainzl Industriesysteme (Linz)',
        icon: 'assets/electricity.svg',
        size: 'full',
        details: undefined
      },
      {
        from: '2012',
        to: undefined,
        primaryText: 'Internship Hardware/Software Development',
        secondaryText: 'KEBA (Linz)',
        icon: 'assets/hardware.svg',
        size: 'full',
        details: {
          tasks: [
            'building a small test-robot for click-tests',
            'implementing a management console for the robot',
          ]
        }
      } 
    ]
  }

  getEducation(): ChronologicalListItem[] {
    return [{
        from: '2021',
        to: '2024',
        primaryText: 'Software Engineering - Part Time',
        secondaryText: 'FH Hagenberg',
        icon: 'assets/university.svg',
        size: 'full',
        details: undefined
      },
      {
        from: '2020',
        to: '2021',
        primaryText: 'Study Preparatory Programme',
        secondaryText: 'FH Wels',
        icon: 'assets/university.svg',
        size: 'full',
        details: undefined
      }, 
      {
        from: '2013',
        to: '2017',
        primaryText: 'Apprenticeship Electrotechnics (Building Technology)',
        secondaryText: 'Hainzl Industriesysteme (Linz)',
        icon: 'assets/apprenticeship.svg',
        size: 'small',
        details: undefined
      },
      {
        from: '2010',
        to: '2013',
        primaryText: 'Electronics',
        secondaryText: 'HTBLA Leonding',
        icon: 'assets/htl.svg',
        size: 'small',
        details: undefined
      }
    ];
  }
  
  getTechStack(): TechStackCategory[] {
    return [
      {
        name: 'Frontend',
        items: [{
            name: 'Angular 12+',
            icon: 'assets/tech/angular.svg',
            since: new Date(2020,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'TypeScript',
            icon: 'assets/tech/ts.svg',
            since: new Date(2020,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'SASS',
            icon: 'assets/tech/sass.svg',
            since: new Date(2020,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'ASP.NET',
            icon: 'assets/tech/aspnet.svg',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'WPF',
            icon: 'assets/tech/wpf.png',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          },{
            name: 'JavaScript',
            icon: 'assets/tech/js.svg',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          },  {
            name: 'CSS',
            icon: 'assets/tech/css.svg',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'HTML',
            icon: 'assets/tech/html.svg',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'React',
            icon: 'assets/tech/react.svg',
            since: new Date(2019,0),
            level: KnowledgeLevel.ADVANCED
          },
        ]
      }, {
        name: 'Backend',
        items: [{
            name: 'C#',
            icon: 'assets/tech/csharp.svg',
            since: new Date(2015,0),
            level: KnowledgeLevel.PRO
          }, {
            name: '.NET',
            icon: 'assets/tech/net.svg',
            since: new Date(2015,0),
            level: KnowledgeLevel.PRO
          }, {
            name: 'Microsoft SQL Server',
            icon: 'assets/tech/mssql.svg',
            since: new Date(2017,0),
            level: KnowledgeLevel.PRO
          }
        ]
      }
    ]
  }
}
