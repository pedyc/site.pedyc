import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-base bg-gray-800 rounded-lg p-4 text-center">
      <div class="skill-icon mb-4 flex justify-center">
        <div class="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl transition-transform duration-300 hover:scale-110">
          {{icon}}
        </div>
      </div>
      <h3 class="card-title text-white">{{name}}</h3>
      <div class="skill-level mb-2">
        <div class="w-full bg-gray-700 rounded-full h-2.5">
          <div class="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out" [style.width.%]="level"></div>
        </div>
      </div>
      <p class="card-description text-gray-400">{{description}}</p>
    </div>
  `,
  styleUrls: ['../shared/card.styles.css']
})
export class SkillCardComponent {
  @Input() name: string = '';
  @Input() icon: string = '⚡';
  @Input() level: number = 0; // 0-100
  @Input() description: string = '';
}