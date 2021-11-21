import {Component, Input} from '@angular/core';
import {ArticleLinkModel} from './article-link.model';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.css']
})
export class ArticleLinkComponent {
  @Input()
  data: ArticleLinkModel | null = null;

}
