import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslocoPipe, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentLang: string;

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getActiveLang();
    this.translocoService.langChanges$.subscribe(
      (lang: string) => this.currentLang = lang
    );
  }

  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
