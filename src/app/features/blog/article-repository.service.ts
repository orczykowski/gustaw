import {Injectable} from '@angular/core';
import {ArticleLinkModel} from './article-link/article-link.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleRepositoryService {

  constructor() {
  }

  fetchAllLinks(): Array<ArticleLinkModel> {
    return [
      {
        logo: 'default.png',
        title: 'Kocie terytorium - cz.1 ',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium-01'
      },
      {
        logo: 'default.png',
        title: 'Kocie terytorium - cz.1 ',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium-01'
      },
      {
        logo: 'default.png',
        title: 'Kocie terytorium - cz.1 ',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium-01'
      },
      {
        logo: 'default.png',
        title: 'Kocie terytorium - cz.1 ',
        description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
        url: 'kocie-terytorium-01'
      }
    ];
  }
}
