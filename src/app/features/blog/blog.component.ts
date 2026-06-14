import {Component, OnInit} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';
import {ArticleRepositoryService} from './article-repository.service';
import {ArticleSearchService} from './article-search.service';
import {SeoService} from '../../core/seo.service';

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
    private seo: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.links = this.articleRepository.fetchAllLinks().filter(a => !!a.url);
    this.articleSearch.buildIndex(this.links);
    this.filteredLinks = this.links;
    this.seo.update({
      title: 'Artykuły o Kotach',
      description: 'Artykuły o kotach: dieta, terytorium, zdrowie i codzienna pielęgnacja. Porady pisane z myślą o właścicielach kotów.',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Strona główna', 'item': 'https://gorczykowski.github.io/gustaw/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://gorczykowski.github.io/gustaw/blog' },
      ],
    });
  }

  onSearch(): void {
    this.filteredLinks = this.articleSearch.search(this.searchQuery);
  }
}
