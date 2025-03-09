import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { LifeCardComponent } from '../../components/life-card/life-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, SkillCardComponent, LifeCardComponent],
  template: `
    <div class="home-container">
      <!-- 头部欢迎区域 -->
      <section class="welcome-section min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">欢迎来到我的世界</h1>
          <p class="text-xl md:text-2xl text-gray-400">一个充满创意和技术的空间</p>
        </div>
      </section>

      <!-- 项目展示区域 -->
      <section class="projects-section min-h-screen p-8 bg-gray-100">
        <h2 class="text-3xl font-bold mb-8 text-center">我的项目</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for(project of projects; track project){
          <app-project-card
            [title]="project.title"
            [description]="project.description"
            [imageUrl]="project.imageUrl"
            [link]="project.link"
            [tags]="project.tags">
          </app-project-card>
          }
        </div>
      </section>

      <!-- 技术栈展示区域 -->
      <section class="skills-section min-h-screen p-8 bg-gray-900 text-white">
        <h2 class="text-3xl font-bold mb-8 text-center">技术栈</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <app-skill-card *ngFor="let skill of skills"
            [name]="skill.name"
            [icon]="skill.icon"
            [level]="skill.level"
            [description]="skill.description">
          </app-skill-card>
        </div>
      </section>

      <!-- 生活分享区域 -->
      <section class="life-section min-h-screen p-8 bg-gray-100">
        <h2 class="text-3xl font-bold mb-8 text-center">生活分享</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <app-life-card *ngFor="let life of lifeShares"
            [title]="life.title"
            [description]="life.description"
            [imageUrl]="life.imageUrl"
            [date]="life.date"
            [category]="life.category"
            [link]="life.link">
          </app-life-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      scroll-behavior: smooth;
    }
    section {
      scroll-snap-align: start;
    }
  `]
})
export class HomeComponent {
  // 项目数据
  projects = [
    {
      title: '个人网站',
      description: '使用Angular开发的个人展示网站，展示个人项目、技术栈和生活分享。',
      imageUrl: 'assets/project1.jpg',
      link: 'https://github.com/yourusername/personal-website',
      tags: ['Angular', 'TypeScript', 'CSS']
    },
    {
      title: '任务管理应用',
      description: '一个简洁高效的任务管理应用，帮助用户组织和跟踪日常任务。',
      imageUrl: 'assets/project2.jpg',
      link: 'https://github.com/yourusername/task-manager',
      tags: ['React', 'Redux', 'Firebase']
    },
    {
      title: '天气预报应用',
      description: '实时天气预报应用，提供精确的天气信息和预测。',
      imageUrl: 'assets/project3.jpg',
      link: 'https://github.com/yourusername/weather-app',
      tags: ['Vue.js', 'API', 'JavaScript']
    }
  ];

  // 技术栈数据
  skills = [
    {
      name: 'JavaScript',
      icon: '🌟',
      level: 90,
      description: '精通现代JavaScript，包括ES6+特性'
    },
    {
      name: 'Angular',
      icon: '🅰️',
      level: 85,
      description: '熟练使用Angular框架开发复杂应用'
    },
    {
      name: 'React',
      icon: '⚛️',
      level: 80,
      description: '掌握React生态系统和相关工具'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      level: 75,
      description: '能够使用Node.js构建后端服务'
    },
    {
      name: 'CSS/SCSS',
      icon: '🎨',
      level: 85,
      description: '精通CSS和SCSS，能创建响应式设计'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      level: 80,
      description: '在大型项目中使用TypeScript提高代码质量'
    },
    {
      name: 'Git',
      icon: '📊',
      level: 85,
      description: '熟练使用Git进行版本控制和团队协作'
    },
    {
      name: 'Docker',
      icon: '🐳',
      level: 70,
      description: '能够使用Docker容器化应用'
    }
  ];

  // 生活分享数据
  lifeShares = [
    {
      title: '旅行日记：九寨沟之行',
      description: '记录了我在九寨沟的美好时光，分享沿途的风景和感受。',
      imageUrl: 'assets/life1.jpg',
      date: new Date('2023-05-15'),
      category: '旅行',
      link: '/blog/jiuzhaigou'
    },
    {
      title: '读书笔记：《原子习惯》',
      description: '分享阅读《原子习惯》一书的心得体会和实践方法。',
      imageUrl: 'assets/life2.jpg',
      date: new Date('2023-06-20'),
      category: '读书',
      link: '/blog/atomic-habits'
    },
    {
      title: '我的摄影作品集',
      description: '展示我近期拍摄的一些风景和人物摄影作品。',
      imageUrl: 'assets/life3.jpg',
      date: new Date('2023-07-10'),
      category: '摄影',
      link: '/blog/photography-collection'
    },
    {
      title: '厨艺探索：学做意大利面',
      description: '记录我学习制作正宗意大利面的过程和心得。',
      imageUrl: 'assets/life4.jpg',
      date: new Date('2023-08-05'),
      category: '美食',
      link: '/blog/italian-pasta'
    }
  ];
}