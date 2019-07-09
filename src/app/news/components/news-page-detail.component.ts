import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/services/news/news.service';
import { NewsPost } from 'src/app/shared/services/news/models/news.models';

@Component({
  templateUrl: './news-page-detail.component.html',
  styleUrls: ['./news-page-detail.component.scss']
})
export class NewsPageDetailComponent implements OnInit {
  newsPost: NewsPost;
  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}
  ngOnInit(): void {
    this.newsService
      .get(this.activatedRoute.snapshot.params.slug)
      .subscribe(post => (this.newsPost = post));
  }
}
