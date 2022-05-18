import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  newPosts: any[] = [];
  isLoading = true;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (res: any) => {
        this.posts = res;
        this.newPosts = this.posts.slice(0, 12);
        this.isLoading = false;
      }
    );
  }

  onEdit(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  onDelete(id: number) {
    this.postService.deletePost(id).subscribe(
      () => {
        this.newPosts.splice(this.newPosts.findIndex(
          (x: any) => x.id === id
        ), 1);
      }
    );
  }

}
