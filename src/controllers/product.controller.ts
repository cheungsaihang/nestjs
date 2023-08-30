import { Controller, Get, Param } from '@nestjs/common';

@Controller('/products')
export class ProductController {
  
  private data = [
    {
        id: 1,
        name: 'apple',
    },
    {
        id: 2,
        name: 'sony',
    },
    {
        id: 3,
        name: 'samsung',
    }
  ]

  constructor() {}
  @Get()
  getProducts(): string {
    return JSON.stringify(this.data);
  }
  @Get(':userId')
  getProductById(@Param('userId') userId: number) {
    let result = this.data.filter((obj) => obj.id == userId);
    return result.length ? JSON.stringify(result[0]) : null;
  }
}
