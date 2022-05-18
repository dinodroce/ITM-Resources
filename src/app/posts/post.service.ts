import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/`);
  }

  getPostById(id: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  savePost(id: number, data: any) {
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
  }

  deletePost(id: number) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}