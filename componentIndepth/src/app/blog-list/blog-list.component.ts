import { Component, OnInit } from '@angular/core';
import { PostData } from '../post-data';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {


  post : PostData[][];
  currentPage: number;
  constructor() { }

  ngOnInit() {
  this.currentPage = 0;
    //this.post.push(new PostData("post 1","This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component's behaviors - Event handling, view children, change detection, content projection and more!This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component's behaviors - Event handling, view children, change detection, content projection and more!"));
    //this.post.push(new PostData("post 2","This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component's behaviors - Event handling, view children, change detection, content projection and more!This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component's behaviors - Event handling, view children, change detection, content projection and more!"));

    this.post = [
      [
        {
          title : 'Post 1',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 2',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 3',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        }
      ],
      [
        {
          title : 'Post 4',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 5',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 6',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        }
      ],
      [
        {
          title : 'Post 7',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 8',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        },
        {
          title : 'Post 9',
          summary: 'This course is a deep dive into components in Angular. Learn about the various features of Angular components and powerful ways of customizing your component'
        }
      ]
    ]
  }

  updatePage(newPage){
    this.currentPage = newPage;
  }
}
