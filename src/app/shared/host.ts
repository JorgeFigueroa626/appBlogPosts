import { HttpHeaders } from '@angular/common/http';

export const endpoint = {

    POST : '/api/post',
    BY_POST_ID : '/api/post/',

    COMMENT : '/api/comment/create',
    COMMENTS : '/api/comment',
    BY_COMMENT_ID : '/api/comment/'
};

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };