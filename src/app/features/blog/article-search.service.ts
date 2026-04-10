import {Injectable} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';
import * as FlexSearch from 'flexsearch';

@Injectable({
  providedIn: 'root'
})
export class ArticleSearchService {
  private index: any;
  private articles: ArticleLinkModel[] = [];

  buildIndex(articles: ArticleLinkModel[]): void {
    this.articles = articles;
    this.index = new FlexSearch.Document({
      tokenize: 'forward',
      document: {
        id: 'url',
        index: ['title', 'description', 'content'],
      },
    });

    for (const article of articles) {
      this.index.add(article);
    }
  }

  search(query: string): ArticleLinkModel[] {
    if (!query.trim()) {
      return this.articles;
    }

    const results: Array<{field: string; result: string[]}> = this.index.search(query, {limit: this.articles.length});
    const matchedUrls = new Set<string>();
    for (const entry of results) {
      for (const id of entry.result) {
        matchedUrls.add(String(id));
      }
    }

    return this.articles.filter(a => matchedUrls.has(a.url));
  }
}
