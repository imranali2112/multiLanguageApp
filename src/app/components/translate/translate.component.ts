import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  imports: [TranslateModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss'
})
export class TranslateComponent {
   translate: TranslateService = inject(TranslateService);
   
  ngOnInit(): void {
    this.translate.use('en'); // default language
  }
 

  setLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;

    if (lang) {
      this.translate.use(lang);
      document.documentElement.dir = (lang === 'ur') ? 'rtl' : 'ltr';
    }
  }


  
}
