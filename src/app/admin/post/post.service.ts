import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpService } from '../../share/api.url';
import { post } from './post.dto';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const BACKEND_URL = HttpService.serverApiURL + '/post';

@Injectable()

export class PostService {

  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get(BACKEND_URL + '/getAll')
  }

  createPost(item: post) {
    let body = JSON.stringify(item);
    return this.http.post(BACKEND_URL + '/post', body, httpOptions);
  }

  updatePost(item: post) {
    let body = JSON.stringify(item);
    return this.http.put(BACKEND_URL + '/update' + item.id, body, httpOptions);
  }

  deletePost(id) {
    return this.http.delete(BACKEND_URL + '/delete' + id, httpOptions);
  }


}
