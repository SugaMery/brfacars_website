import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent,CommonModule, FormsModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blog: any; // Object to hold blog data

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const blogId = params['id'];
      console.log("iddd",blogId)
      if (blogId) {
        this.fetchBlogDetail(blogId);

      }
    });
  }



  fetchBlogDetail(blogId: string): void {
    this.blogService.getBlogById(Number(blogId)).subscribe(data => {
      console.log("dattaaaaa",data)

      this.blog = data;
    });
  }
}
