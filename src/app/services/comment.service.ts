import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/host';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private _http:HttpClient
  ) { }

  createComment(postId:number, postedBy:string, content:string):Observable<any>{
    const params = {
      postId : postId,
      postedBy: postedBy
    }
    const requestUrl = `${environment.api}${endpoint.COMMENT}`;
    return this._http.post<any>(requestUrl, content, {params});
  }

  getByCommentId(commentId:number):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.BY_COMMENT_ID}${commentId}`;
    return this._http.get(requestUrl);
  }

  getCommentByPostId(postId:number):Observable<any>{
    const  requestUrl = `${environment.api}${endpoint.BY_COMMENT_ID}${postId}`;
    return this._http.get(requestUrl);
  }

  findAllComments():Observable<any>{
    const requestUrl = `${environment.api}${endpoint.COMMENTS}`;
    return this._http.get(requestUrl);
  }

  deleteByCommentId(commentId:number):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.BY_COMMENT_ID}${commentId}`;
    return this._http.delete(requestUrl);
  }
}
