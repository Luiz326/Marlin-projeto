import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // posts: Post[] = [];
  title: any;

  posts$!: Observable<Post[]>;

  constructor(private service:PostService) {}

  ngOnInit() {
      // this.service.getPosts()
      //   .subscribe(response => {
      //     this.posts = response;
      //   });
      this.posts$ = this.service.getPosts();
  }

}
