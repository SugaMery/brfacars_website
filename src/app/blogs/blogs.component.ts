import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PreloaderComponent } from "../preloader/preloader.component";
import { Blog, BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PreloaderComponent,CommonModule, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs: Blog[] = [];
  formatTitle(title: string): string {
    return title
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize the string
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove any non-word characters (except hyphens)
  }
  constructor(private blogService: BlogService) { }  // Inject BlogService

  ngOnInit(): void {
    this.loadBlogs();  // Call the loadBlogs method to fetch blog data
  }

  // Method to load blogs using BlogService
  loadBlogs(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      console.log("fffff",data)
      this.blogs = data;  // Assign the fetched data to blogs array
    });
  }
}
