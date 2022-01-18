import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly  API= `${environment.API}posts`;

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get<Post[]>(this.API);

  }

  create(post: any){
    return this.httpClient.post(this.API,post).pipe(take(1));
  }

}
