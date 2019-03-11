import { Component, OnInit, Input } from '@angular/core';
import { PostData } from '../post-data';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.scss']
})
export class BlogTileComponent implements OnInit {

  @Input() post: PostData;
  fullSummary: string;
  clicked = true;
  buttonText = 'READ';
  constructor(private truncate: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncate.transform(this.post.summary, 30);
  }

  onToggle() {
    this.post.summary = this.fullSummary;

    if (!this.clicked) {
      this.buttonText = 'READ';
      this.post.summary = this.truncate.transform(this.post.summary, 30);
    } else {
      this.buttonText = 'Collapse';
    }
    this.clicked = !this.clicked;
  }

}
