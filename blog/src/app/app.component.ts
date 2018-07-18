import { Component } from '@angular/core';
import { ObjPost } from './post';
// import de l'array des posts à partir du fichier mock-posts.ts
import { TABPOSTS } from './mock-posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Posts';
  updateDate = new Date();
  postsList = TABPOSTS;

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() { }
}
