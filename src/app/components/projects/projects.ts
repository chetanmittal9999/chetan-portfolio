import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface Tech {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  category: 'live';
  emoji: string;
  gradient: string;
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
  techs: Tech[];
  highlights: string[];
}

const REACT: Tech = { name: 'React', color: '#61dafb' };
const VITE: Tech = { name: 'Vite', color: '#a855f7' };

interface Building {
  title: string;
  kind: string;
  description: string;
  icon: string;
  color: string;
  stack?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      id: 7,
      title: 'Apna Bhattu Kalan',
      description:
        'Apne Gaon Ki Apni Digital Duniya — a hyperlocal platform for Bhattu Kalan, Haryana. Residents can find local shops and services, jobs, buy & sell listings, kheti updates, notices and events, all in one trusted place.',
      type: 'Community Platform',
      category: 'live',
      emoji: '🏡',
      gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #fef9c3 100%)',
      featured: true,
      live: 'https://apnabhattu.techtattava.in/',
      image: '/assets/projects/apnabhattu.jpg',
      techs: [REACT, VITE, { name: 'Responsive UI', color: '#2563eb' }],
      highlights: ['Local Business Directory', 'Jobs & Buy/Sell', 'Notices & Events'],
    },
    {
      id: 8,
      title: 'Techtattava',
      description:
        'Official website for Techtattava — a software development, AI/ML and tech consulting company. Presents services, expertise and company story with a modern, fast and fully responsive interface.',
      type: 'Company Website',
      category: 'live',
      emoji: '💡',
      gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #e0f2fe 100%)',
      featured: true,
      live: 'https://techtattava.in/',
      image: '/assets/projects/techtattava.jpg',
      techs: [REACT, VITE, { name: 'Responsive UI', color: '#2563eb' }],
      highlights: ['Software Development', 'AI/ML Services', 'Tech Consulting'],
    },
    {
      id: 9,
      title: 'Amit Kumar — Geospatial Portfolio',
      description:
        'Personal portfolio for a GIS & Remote Sensing professional, showcasing geospatial projects, expertise and experience through a clean, content-focused design that works on every screen.',
      type: 'Portfolio Website',
      category: 'live',
      emoji: '🛰️',
      gradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #ccfbf1 100%)',
      featured: false,
      live: 'https://amitktala.com/',
      image: '/assets/projects/amitktala.jpg',
      techs: [REACT, VITE, { name: 'Responsive UI', color: '#2563eb' }],
      highlights: ['GIS & Remote Sensing', 'Project Showcase', 'Personal Branding'],
    },
  ];

  /** Work in progress — added to the portfolio once launched. */
  building: Building[] = [
    {
      title: 'Web & Mobile Product',
      kind: 'AdvaDigital',
      description: "A product I'm building at AdvaDigital for web and mobile. More details once it launches.",
      icon: '📱',
      color: '#8b5cf6',
    },
    {
      title: 'Freelance Product',
      kind: 'Freelance',
      description: "A product I'm building for a freelance client. It'll be added here soon.",
      icon: '🤝',
      color: '#0ea5e9',
    },
    {
      title: 'Personal Projects',
      kind: 'Personal',
      description: "A few side projects I'm building on my own time. They'll be added here soon.",
      icon: '🧪',
      color: '#ec4899',
    },
  ];

  domain(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}
