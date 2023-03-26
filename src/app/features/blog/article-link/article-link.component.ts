import {Component, Input, OnInit} from '@angular/core';
import {ArticleLinkModel} from './article-link.model';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.css']
})
export class ArticleLinkComponent implements OnInit {
  @Input()
  data: ArticleLinkModel | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
