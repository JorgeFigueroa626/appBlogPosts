import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  postId = this._activeRoute.snapshot.params['id'];
  postData: any;

  commentForm!:FormGroup;
  comments:any;

  constructor(
    private _fb: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _postService: PostService,
    private _snackBar: MatSnackBar,
    private _commentService: CommentService
  ) {}

  ngOnInit(): void {
    console.log(this.postId);
    this.getByPostId();

    this.commentForm = this._fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required]
    })
  }

  getByPostId() {
    this._postService.getByPostId(this.postId).subscribe(
      (resp) => {
        this.postData = resp;
        console.log(this.postData);
        this.getCommentByPost();
      },
      (error) => {
        this._snackBar.open('Something went wrong', 'ERROR');
      }
    );
  }

  likeByPostId() {
    this._postService.likeByPostId(this.postId).subscribe(
      (resp) => {
        this.postData = resp;
        console.log(this.postData);
        this.getByPostId();
      },
      (error) => {
        this._snackBar.open('Something went wrong', 'ERROR');
      }
    );
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this._commentService.createComment(this.postId,  postedBy, content).subscribe(
      (resp)=>{
          this._snackBar.open('Comment Published successfully', 'OK');
          this.getCommentByPost();
      },
      (error)=>{
        this._snackBar.open('Something wrong', 'ERROR');
      }
    )
  }

  getCommentByPost(){
    this._commentService.getCommentByPostId(this.postId).subscribe(
      (resp)=>{
        this.comments = resp;
      },
      (error)=>{
        this._snackBar.open('Something wrong', 'ERROR');
      }
    )
  }



}
