import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card-base bg-white rounded-lg shadow-md overflow-hidden">
      <div class="card-image-container h-48 bg-gray-200">
        @if (imageUrl) {
          <img [src]="imageUrl" [alt]="title" class="card-image">
        } @else {
          <div class="w-full h-full flex items-center justify-center bg-gray-300">
            <span class="text-gray-500">暂无图片</span>
          </div>
        }
      </div>
      <div class="card-content">
        <h3 class="card-title text-gray-800">{{title}}</h3>
        <p class="card-description">{{description}}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          @for (tag of tags; track tag) {
            <span class="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-full transition-all duration-300 hover:bg-purple-200">{{tag}}</span>
          }
        </div>
        @if (link) {
          <a [href]="link" target="_blank" class="card-link inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-300 transform hover:translate-y-[-2px]">
            查看项目
          </a>
        }
      </div>
    </div>
  `,
    styleUrls: ['../shared/card.styles.css']
})
export class ProjectCardComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imageUrl: string = '';
    @Input() link: string = '';
    @Input() tags: string[] = [];
}