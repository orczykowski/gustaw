import {Component, OnInit} from '@angular/core';
import {ArticleLinkModel} from "./article-link/article-link.model";
import {ArticleRepositoryService} from "./article-repository.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  links: Array<ArticleLinkModel> = new Array<ArticleLinkModel>();

  constructor(private articleRepository: ArticleRepositoryService) {
  }

  ngOnInit(): void {
    this.links = this.articleRepository.fetchAllLinks();
  }

}
