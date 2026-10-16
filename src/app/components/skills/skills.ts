import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface SkillCard {
  title: string;
  icon: string;
  color: string;
  tags: string[];
}

interface Proficiency {
  name: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  proficiency: Proficiency[] = [
    { name: 'Angular', level: 85, color: '#dd0031' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'React Native', level: 75, color: '#8b5cf6' },
    { name: 'Tailwind CSS', level: 82, color: '#38bdf8' },
    { name: 'TypeScript', level: 80, color: '#3178c6' },
    { name: 'Node.js', level: 78, color: '#3c873a' },
    { name: 'PostgreSQL', level: 75, color: '#336791' },
    { name: 'MySQL', level: 72, color: '#4479a1' },
  ];

  marquee = [
    'React', 'React Native', 'Tailwind CSS', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js',
    'PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Git', 'REST APIs',
  ];

  // highlighted in the skill cards
  readonly hotTags = ['React', 'React Native', 'Tailwind CSS'];

  skillCards: SkillCard[] = [
    {
      title: 'Frontend Development',
      icon: '🖥️',
      color: '#2563eb',
      tags: ['React', 'React Native', 'Tailwind CSS', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: '#16a34a',
      tags: ['Node.js', 'Express.js', 'REST APIs', 'Supabase', 'JWT Auth'],
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: '#0284c7',
      tags: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'SQL Queries', 'Schema Design'],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: '#d97706',
      tags: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Vite'],
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      color: '#9333ea',
      tags: ['Data Structures', 'OOP', 'System Design', 'Responsive Design'],
    },
    {
      title: 'Other Skills',
      icon: '🚀',
      color: '#db2777',
      tags: ['Debugging', 'Performance Optimization', 'Agile', 'Code Review'],
    },
  ];
}
