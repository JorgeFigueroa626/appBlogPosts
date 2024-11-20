import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoint } from '../shared/host';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }

  savePost(post:any):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.POST}`;
    return this._http.post(requestUrl, post);
  }

  getByPostId(postId:number):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.BY_POST_ID}${postId}`;
    return this._http.get(requestUrl);
  }

  likeByPostId(postId:number):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.BY_POST_ID}${postId}/like`;
    return this._http.put(requestUrl, {});
  }

  searchByNamePost(name:string):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.POST}/search/${name}`;
    return this._http.get(requestUrl);
  }

  findAllPosts():Observable<any>{
    const requestUrl = `${environment.api}${endpoint.POST}`;
    return this._http.get(requestUrl);
  }

  deleteByPostId(postId:number):Observable<any>{
    const requestUrl = `${environment.api}${endpoint.BY_POST_ID}${postId}`;
    return this._http.delete(requestUrl);
  }
}
