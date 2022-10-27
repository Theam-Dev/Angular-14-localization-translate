import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-localization';
  lang: any;

  constructor(public translateService: TranslateService) 
  {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang')|| "en");
  }
  ngOnInit(){
    this.lang=localStorage.getItem("lang") || "en";
  }
  changeLang(key:any){
    localStorage.setItem("lang",key);
    window.location.reload();
  }
}
