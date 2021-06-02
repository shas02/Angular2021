import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Comment} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../contants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getByPostId(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${urls.comments}?postId=${postId}`)
  }
}
