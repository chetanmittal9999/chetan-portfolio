import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { EducationComponent } from './components/education/education';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet,HeroComponent,ExperienceComponent,Projects,SkillsComponent,EducationComponent,Contact,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
