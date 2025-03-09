import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-life-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="card-base bg-white rounded-lg shadow-md overflow-hidden">
      <div class="card-image-container h-64 bg-gray-200">
        @if (imageUrl) {
          <img [src]="imageUrl" [alt]="title" class="card-image">
        } @else {
          <div class="w-full h-full flex items-center justify-center bg-gray-300">
            <span class="text-gray-500">暂无图片</span>
          </div>
        }
      </div>
      <div class="card-content">
        <div class="flex justify-between items-center mb-3">
          <h3 class="card-title text-gray-800">{{title}}</h3>
          <span class="text-sm text-gray-500">{{date | date:'yyyy-MM-dd'}}</span>
        </div>
        <p class="card-description">{{description}}</p>
        <div class="flex justify-between items-center mt-auto">
          <div class="flex items-center">
            <span class="text-gray-500 text-sm">{{category}}</span>
          </div>
          @if (link) {
            <a [href]="link" class="card-link">
              阅读更多 <span class="ml-1 transform transition-transform duration-300">→</span>
            </a>
          }
        </div>
      </div>
    </div>
  `,
    styleUrls: ['../shared/card.styles.css']
})
export class LifeCardComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() imageUrl: string = '';
    @Input() date: Date = new Date();
    @Input() category: string = '';
    @Input() link: string = '';
}