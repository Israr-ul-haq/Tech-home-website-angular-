import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website';

  constructor(@Inject(DOCUMENT) private document: Document) {
    // var i: number = 0;
    // var txt: string = 'Lorem ipsum dummy text blabla.';
    // var speed: number = 50;
    // if (i < txt?.length) {
    //   debugger;
    //   let element: any = document.getElementById('demo') as HTMLInputElement;
    //   element.innerHTML += txt?.charAt(i);
    //   i++;
    // }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('nav')?.classList.add('nav_css');
      document.getElementById('nav-items1')?.classList.add('nav-items1');
    } else if (document.documentElement.scrollTop === 0) {
      document.getElementById('nav')?.classList.remove('nav_css');
      document.getElementById('nav-items1')?.classList.remove('nav-items1');
    }
  }

  ngOnInit(): void {
    Aos.init();
  }
}
