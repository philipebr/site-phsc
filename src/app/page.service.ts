import { Injectable } from '@angular/core';

import { Page } from './page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPages(): Page[] {
    return [
      new Page('/home', 'Quem Sou'), 
      new Page('/experience', 'Experiência'),
      new Page('/qualification', 'Qualificação'),
      new Page('/contact','Contato')]
  }

}
