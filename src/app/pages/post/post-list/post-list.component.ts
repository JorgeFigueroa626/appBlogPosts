import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private _postService: PostService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.findAllPosts();
  }

  findAllPosts(){
    this._postService.findAllPosts().subscribe(
      (resp) => {
        this.posts = resp;
        console.log(this.posts);
      },
      (error) => {
        this._snackBar.open('Error al get all posts', 'ERROR', {
          duration: 300,
        });
        console.log(error.message);
      }
    );
  }
}
