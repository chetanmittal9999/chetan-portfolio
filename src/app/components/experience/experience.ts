import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface Experience {
  role: string;
  company: string;
  type: string;
  date: string;
  location: string;
  active: boolean;
  icon: string;
  color: string;
  tags: string[];
  points: string[];
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {
  stats: Stat[] = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '3', label: 'Companies' },
    { value: '2', label: 'Internships' },
    { value: '8+', label: 'Projects Delivered' },
  ];

  experiences: Experience[] = [
    {
      role: 'Full Stack Engineer',
      company: 'AdvaDigital',
      type: 'Full-time',
      date: 'Aug 2026 — Present',
      location: 'Remote · Florida, USA',
      active: true,
      icon: '🚀',
      color: '#2563eb',
      tags: ['React', 'React Native', 'Tailwind CSS', 'Node.js', 'TypeScript'],
      points: [
        "Building the company's product for web and mobile.",
        'Working across the full stack — from APIs to polished, responsive interfaces.',
        'Collaborating with a fully remote team through async communication and code reviews.',
      ],
    },
    {
      role: 'Associate Developer',
      company: 'Bridging Technologies',
      type: 'Full-time',
      date: 'Jan 2026 — Aug 2026',
      location: 'Mohali, India',
      active: false,
      icon: '💼',
      color: '#dd0031',
      tags: ['Angular', 'Reactive Forms', 'Bootstrap', 'TypeScript'],
      points: [
        'Built a fully responsive UI for a finance product used by 10k+ users.',
        'Developed complex Angular reactive form components with validation.',
        'Improved page load performance by 35% through lazy loading and code splitting.',
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Bridging Technologies',
      type: 'Internship',
      date: 'Jul 2025 — Jan 2026',
      location: 'Mohali, India',
      active: false,
      icon: '🎓',
      color: '#2563eb',
      tags: ['Angular', 'Bootstrap', 'JavaScript'],
      points: [
        'Built reusable UI components that reduced development time by 20%.',
        'Collaborated in an agile team with weekly sprints and code reviews.',
      ],
    },
    {
      role: 'Full Stack Intern',
      company: 'Phenom IT',
      type: 'Internship',
      date: 'Jul 2024 — Oct 2024',
      location: 'Hisar, India',
      active: false,
      icon: '⚡',
      color: '#16a34a',
      tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Express'],
      points: [
        'Developed full-stack web applications from design to deployment.',
        'Built RESTful APIs using Express.js with JWT authentication.',
        'Integrated frontend React components with Node.js backend seamlessly.',
      ],
    },
  ];
}
