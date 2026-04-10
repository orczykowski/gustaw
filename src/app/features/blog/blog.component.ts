import {Component, OnInit} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';
import {ArticleRepositoryService} from './article-repository.service';
import {ArticleSearchService} from './article-search.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: false
})
export class BlogComponent implements OnInit {
  links: Array<ArticleLinkModel> = new Array<ArticleLinkModel>();
  filteredLinks: Array<ArticleLinkModel> = [];
  searchQuery = '';

  constructor(
    private articleRepository: ArticleRepositoryService,
    private articleSearch: ArticleSearchService,
  ) {
  }

  ngOnInit(): void {
    this.links = this.articleRepository.fetchAllLinks();
    this.articleSearch.buildIndex(this.links);
    this.filteredLinks = this.links;
  }

  onSearch(): void {
    this.filteredLinks = this.articleSearch.search(this.searchQuery);
  }
}
