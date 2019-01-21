import { Component, OnInit } from '@angular/core';

import { PageService } from './page.service';

import { Page } from './page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  private pages: Page[];

  constructor(private pageService: PageService) {

  }

  ngOnInit(): void {
    this.pages = this.pageService.getPages();
  }




}
