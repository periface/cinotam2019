import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsPost } from 'src/app/shared/services/news/models/news.models';
import { NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  templateUrl: './news-page-detail.component.html',
  styleUrls: ['./news-page-detail.component.scss']
})
export class NewsPageDetailComponent implements OnInit, OnDestroy {
  newsPost: NewsPost;
  @ViewChild('bottom', { static: true }) bottom: ElementRef;
  detailSubscription: Subscription;
  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}
  ngOnInit(): void {
    this.detailSubscription = this.newsService
      .get(this.activatedRoute.snapshot.params.slug)
      .subscribe(post => (this.newsPost = post));
  }
  scrollToBottom() {
    this.bottom.nativeElement.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  ngOnDestroy(): void {
    console.log('Destroy');
    if (this.detailSubscription) {
      this.detailSubscription.unsubscribe();
    }
  }
}
