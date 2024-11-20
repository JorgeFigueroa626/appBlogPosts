import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  postForm!: FormGroup;
  tags:string[] = [];

  constructor(
    private _fb:FormBuilder,
    private _router:Router,
    private _snackBar:MatSnackBar,
    private _postService: PostService
  ){}

  ngOnInit(): void {
    this.postForm = this._fb.group({
      name: [null, [Validators.required]],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy : [null, [Validators.required]]
    })
  }

  addTag(event:any){
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  removeTag(tag:any){
    const index = this.tags.indexOf(tag);
    
    if (index>0) {
     this.tags.splice(index, 1); 
    }
  }

  createPost(){
    const data = this.postForm.value;
    data.tags = this.tags;
    this._postService.savePost(data).subscribe(
      (resp)=>{
        this._snackBar.open('Post create successfully','OK',{duration:300});
        this._router.navigateByUrl('/post-list');
      },
      (error)=>{
        this._snackBar.open('Something went wrong', 'ERROR')
        console.log(error.message);
        
      }
    )
  }

}
