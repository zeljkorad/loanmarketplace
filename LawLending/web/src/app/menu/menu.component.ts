import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  public constructor(private titleService: Title ) { }
    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
  }
}
