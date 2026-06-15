import {Component} from '@angular/core';
import {ArticleRepositoryService} from './features/blog/article-repository.service';
import {Router} from '@angular/router';
import {SeoService} from './core/seo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  articleCount: number;

  constructor(private articleRepository: ArticleRepositoryService, public router: Router, seo: SeoService) {
    this.articleCount = this.articleRepository.fetchAllLinks().filter(a => !!a.url).length;
    seo.init();
  }

  isCalcActive(): boolean {
    return this.router.url.startsWith('/kalkulator');
  }
}
