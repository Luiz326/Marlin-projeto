import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any;
  title: any;

  constructor(private service:PostService) {}

  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }

}
