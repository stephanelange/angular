import { Component, Input, OnInit } from '@angular/core';
import { ObjPost } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  // Récupération du tableau des posts passé par app.component
  @Input() tabPosts: ObjPost;

  updateDate = new Date();

  constructor() { }

  ngOnInit() {
    // J'initialise mes champs de date à la date courante pour l'exercice
    let i;
    for ( i = 0; i < 3; i++) {
      this.tabPosts[i].created_at = this.updateDate;
    }
  }

}
