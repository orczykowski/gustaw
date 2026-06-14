import {Component} from '@angular/core';
import {ArticleRepositoryService} from './features/blog/article-repository.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  articleCount: number;
  calcMenuOpen = false;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private articleRepository: ArticleRepositoryService, public router: Router) {
    this.articleCount = this.articleRepository.fetchAllLinks().length;
  }

  isCalcActive(): boolean {
    return this.router.url.startsWith('/kalkulator');
  }

  openCalcMenu(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.calcMenuOpen = true;
  }

  closeCalcMenu(): void {
    this.closeTimer = setTimeout(() => {
      this.calcMenuOpen = false;
      this.closeTimer = null;
    }, 180);
  }
}
