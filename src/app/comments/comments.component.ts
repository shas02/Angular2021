import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../services";
import {Comment} from "../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  postId: number;
  comments: Comment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getByPostId(this.postId).subscribe(value => this.comments = value);
  }

}
