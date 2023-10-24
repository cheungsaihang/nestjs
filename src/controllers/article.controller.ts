import { Controller, Get, Param } from '@nestjs/common';

@Controller('/article')
export class ArticleController {
  
  private data = [
    {
        id: 1,
        name: 'Next.js',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/320px-Nextjs-logo.svg.png',
        content: 'Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.\n React documentation mentions Next.js among "Recommended Toolchains" advising it to developers when "building a server-rendered website with Node.js".\n Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side.\n The copyright and trademarks for Next.js are owned by Vercel, which also maintains and leads its open-source development.',
    },
    {
        id: 2,
        name: 'Laravel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/9/9a/20190820171149%21Laravel.svg',
        content: 'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony.\nSome of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.\n The source code of Laravel is hosted on GitHub and licensed under the terms of MIT License.'
    },
    {
        id: 3,
        name: 'Spring Boot',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/240px-Spring_Boot.svg.png',
        content: 'Spring Boot Extension is Spring\'s convention-over-configuration solution for creating production-grade Spring applications with minimal amounts of configuration.\n Most of the application can be preconfigured using Spring team\'s "opinionated view" of the best configuration and use of the Spring platform and third-party libraries.\n A Spring Boot application can be written using several programming languages, including Java and Kotlin.'
    },
    {
        id: 4,
        name: 'Django2',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/260px-Django_logo.svg.png',
        content: 'Django is a free and open-source, Python-based web framework that follows the model–template–views (MTV) architectural pattern.\n It is maintained by the Django Software Foundation (DSF), an independent organization established in the US as a 501(c)(3) non-profit.\n Django\'s primary goal is to ease the creation of complex, database-driven websites.\n The framework emphasizes reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don\'t repeat yourself.\n Python is used throughout, even for settings, files, and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.\n Some well-known sites that use Django include Instagram, Mozilla, Disqus, Bitbucket, Nextdoor and Clubhouse.',
    }
  ]

  constructor() {}
  @Get()
  getArticles(): string {
    const list = this.data.map((item) => {
        return { id: item.id, name: item.name, logo: item.logo };
    });
    return JSON.stringify(list);
  }
  @Get(':articleId')
  getArticleById(@Param('articleId') articleId: number) {
    let result = this.data.filter((obj) => obj.id == articleId);
    return result.length ? JSON.stringify(result[0]) : null;
  }
}
