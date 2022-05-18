import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {

  error: string | undefined;
  editForm!: FormGroup;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.postService.getPostById(this.route.snapshot.params['id']).subscribe(
      (x) => {
        this.createForm(x);
        this.isLoading = false;
      }
    );
  }

  savePost() {
    this.postService.savePost(this.route.snapshot.params['id'], this.editForm.value).subscribe();
    this.router.navigate(['/dashboard']);
  }

  cancelPost() {
    this.router.navigate(['/dashboard']);
  }

  private createForm(data: any) {
    this.editForm = this.fb.group({
      title: [data.title, Validators.required],
      body: [data.body, Validators.required],
      id: [data.id],
      userId: [data.userId],
    });
  }

}
