import {Injectable} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {
  private static DEFAULT_ICON = 'default-article-icon.png';

  fetchAllLinks(): Array<ArticleLinkModel> {

    return [
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kocie terytorium',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium'
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kocia dieta',
        description: 'Kilka słów o kociej diecie',
        url: 'dieta'
      }
    ];
  }
}
