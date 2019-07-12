import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsPost } from '../shared/services/news/models/news.models';
import { NewsService } from '../shared/services/news/news.service';

@Component({
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  /**
   *
   */
  constructor(private newsService: NewsService) {}
  news: NewsPost[] = [];
  newsSubscription: Subscription;

  ngOnInit(): void {
    this.newsSubscription = this.newsService.getAll().subscribe(data => {
      this.news = data;
    });
  }
  ngOnDestroy(): void {
    console.log('Destroy');
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
  }
}
