import { Body, Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  constructor() {
  }

  @Get('')
  getHouses() {
    return 'Hello'
  }
}