import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly navLinks: NavLink[] = [
    { id: 'experience', label: 'Experience' },
    { id: 'expertise', label: 'Skills' },
    { id: 'work', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly roles = ['Full Stack Engineer', 'Frontend Developer', 'React Developer', 'React Native Developer'];

  readonly stats = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '8+', label: 'Projects Built' },
    { value: '3', label: 'Companies' },
  ];

  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly progress = signal(0);
  readonly activeSection = signal('home');
  readonly typed = signal('');

  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.tick(0, 0, false);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
    document.body.classList.remove('no-scroll');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.isScrolled.set(y > 20);
    this.progress.set(max > 0 ? Math.min(y / max, 1) : 0);

    const current = this.navLinks
      .map((link) => link.id)
      .filter((id) => {
        const el = document.getElementById(id);
        return !!el && el.getBoundingClientRect().top <= window.innerHeight * 0.35;
      })
      .pop();
    this.activeSection.set(current ?? 'home');
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 900 && this.menuOpen()) this.closeMenu();
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.classList.remove('no-scroll');
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    document.body.classList.toggle('no-scroll', this.menuOpen());
  }

  /** Typewriter loop: type a role, pause, delete it, move to the next. */
  private tick(role: number, chars: number, deleting: boolean): void {
    const word = this.roles[role];
    this.typed.set(word.slice(0, chars));

    if (!deleting && chars === word.length) {
      this.timer = setTimeout(() => this.tick(role, chars, true), 1800);
    } else if (deleting && chars === 0) {
      this.timer = setTimeout(() => this.tick((role + 1) % this.roles.length, 0, false), 350);
    } else {
      this.timer = setTimeout(
        () => this.tick(role, chars + (deleting ? -1 : 1), deleting),
        deleting ? 40 : 85,
      );
    }
  }
}
