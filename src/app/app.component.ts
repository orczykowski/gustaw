import {Component} from '@angular/core';
import {ArticleRepositoryService} from './features/blog/article-repository.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  articleCount: number;

  constructor(private articleRepository: ArticleRepositoryService) {
    this.articleCount = this.articleRepository.fetchAllLinks().length;
  }
}
