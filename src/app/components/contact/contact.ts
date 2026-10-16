import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = 'chetanmittal32@gmail.com';

  contactMethods: ContactMethod[] = [
    { icon: 'mail_outline', title: 'Email', value: this.email, link: `mailto:${this.email}` },
    { icon: 'call', title: 'Phone', value: '+91 70823 88524', link: 'tel:+917082388524' },
    {
      icon: 'work_outline',
      title: 'LinkedIn',
      value: 'in/chetanmittal01',
      link: 'https://www.linkedin.com/in/chetanmittal01/',
    },
    { icon: 'location_on', title: 'Location', value: 'Mohali, India · Remote', link: '' },
  ];
}
