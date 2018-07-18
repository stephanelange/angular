import { Component, OnInit, Input } from '@angular/core';
import {ObjPost} from '../../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: ObjPost;

  selectedPost: ObjPost;

  onLove(post: ObjPost) {
    this.selectedPost = post;
    console.log(this.selectedPost.loveIts);
    console.log('J\'aime');
    console.log(this.selectedPost.title);
    this.selectedPost.loveIts++;
    console.log(this.selectedPost.loveIts);

  }

  onDontLove (post: ObjPost) {
    this.selectedPost = post;
    console.log(this.selectedPost.loveIts);
    console.log('Je n\'aime pas');
    console.log(this.selectedPost.title);
    this.selectedPost.loveIts--;
    console.log(this.selectedPost.loveIts);
  }

  constructor() { }

  ngOnInit() {
  }

}
