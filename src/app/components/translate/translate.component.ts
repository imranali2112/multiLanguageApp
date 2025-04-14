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

  ngOnInit(): void{
     
    this.translate.use('en');

  }

  onEnglish(lang: string) {
    this.translate.use(lang);
    // this.setDirection(lang);
  }

  onUrdu(lang: string) {
    this.translate.use(lang);
  }

}
