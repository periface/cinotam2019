import { Component, OnInit } from '@angular/core';
import { NewsPost } from '../shared/services/news/models/news.models';
import { NewsService } from '../shared/services/news/news.service';

@Component({
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: NewsPost[] = [];
  /**
   *
   */
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.newsService.getAll().subscribe(data => {
      this.news = data;
    });
  }
}
