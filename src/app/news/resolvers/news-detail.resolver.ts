import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { NewsPost } from 'src/app/shared/services/news/models/news.models';
import { NewsService } from 'src/app/shared/services/news/news.service';

export class NewsDetailsResolver implements Resolve<Observable<NewsPost>> {
  constructor(private newsService: NewsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.newsService.get(route.params.slug);
  }
}
