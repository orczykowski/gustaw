import {Injectable} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {
  private static DEFAULT_ICON = 'default-article-icon.jpeg';

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
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Kot idealny współokator',
        description: 'Pozytywny wpływ posiadania kota w domu',
        url: 'kot-idealny-wspolokator'
      },
      {
        icon: ArticleRepositoryService.DEFAULT_ICON,
        title: 'Dlaczego koty mruczą?',
        description: 'mrrrrrr ...',
        url: 'dlaczego-koty-mrucza'
      },
    ];
  }
}
