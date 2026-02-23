import {Component, OnInit} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';
import {ArticleRepositoryService} from './article-repository.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: false
})
export class BlogComponent implements OnInit {
  links: Array<ArticleLinkModel> = new Array<ArticleLinkModel>();
  searchQuery = '';

  constructor(private articleRepository: ArticleRepositoryService) {
  }

  ngOnInit(): void {
    this.links = this.articleRepository.fetchAllLinks();
  }

  get filteredLinks(): Array<ArticleLinkModel> {
    if (!this.searchQuery.trim()) {
      return this.links;
    }
    const query = this.searchQuery.toLowerCase();
    return this.links.filter(link =>
      link.title.toLowerCase().includes(query) ||
      link.description.toLowerCase().includes(query)
    );
  }
}
