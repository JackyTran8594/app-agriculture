import { Component, OnInit } from '@angular/core';
import { post } from '../post.dto';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  createPost(item: post) {
    this.service.createPost(item);
    this.dismiss()
  }

  //closed form or redirect to main page
  dismiss() {

  }
}
