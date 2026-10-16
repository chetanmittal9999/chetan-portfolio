import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface Education {
  year: string;
  degree: string;
  institution: string;
  place: string;
  date: string;
  icon: string;
  color: string;
  scoreText: string;
  scoreLabel: string;
  /** 0–1, drives the animated score ring */
  progress: number;
  notes: string[];
  badge?: 'current' | 'topper';
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  // circumference of the score ring (r = 36)
  readonly ring = 2 * Math.PI * 36;

  /** 0–1: how far the timeline line has "drawn" as the user scrolls */
  readonly lineProgress = signal(0);
  private readonly timeline = viewChild<ElementRef<HTMLElement>>('timeline');

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll(): void {
    const el = this.timeline()?.nativeElement;
    if (!el) return;
    const { top, height } = el.getBoundingClientRect();
    const progress = (window.innerHeight * 0.6 - top) / height;
    this.lineProgress.set(Math.min(Math.max(progress, 0), 1));
  }

  education: Education[] = [
    {
      year: '2025 — Now',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Chandigarh University',
      place: 'Online Programme',
      date: '2025 — Present',
      icon: '💻',
      color: '#10b981',
      scoreText: '9.0',
      scoreLabel: 'CGPA',
      progress: 0.9,
      notes: ['Currently in 2nd year', 'Pursuing alongside full-time work'],
      badge: 'current',
    },
    {
      year: '2022 — 2025',
      degree: 'Bachelor of Computer Applications (CS)',
      institution: 'Dayanand College, Hisar',
      place: 'Affiliated to GJU, Hisar',
      date: 'Aug 2022 — Jul 2025',
      icon: '🎓',
      color: '#6366f1',
      scoreText: '7.6',
      scoreLabel: 'Grade',
      progress: 0.76,
      notes: ['Specialization in Computer Science', 'Graduated 2025'],
    },
    {
      year: '2021 — 2022',
      degree: 'Class 12th',
      institution: 'GSSS Bhattu Kalan',
      place: 'Fatehabad, Haryana',
      date: 'Apr 2021 — Mar 2022',
      icon: '🏫',
      color: '#f59e0b',
      scoreText: '93.67%',
      scoreLabel: 'Percentage',
      progress: 0.9367,
      notes: ['Ranked #1 in the entire school'],
      badge: 'topper',
    },
    {
      year: '2019 — 2020',
      degree: 'Class 10th',
      institution: 'Bala Ji Public School, Bhattu Kalan',
      place: 'Fatehabad, Haryana — 125053',
      date: '2019 — 2020',
      icon: '📘',
      color: '#0ea5e9',
      scoreText: '90.6%',
      scoreLabel: 'Percentage',
      progress: 0.906,
      notes: ['Secondary education (Class 10th)'],
    },
  ];
}
