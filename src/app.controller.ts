import { Body, Controller, Get } from '@nestjs/common';


@Controller()
export class BuildingsController {
  constructor() {
  }

  @Get('')
  getHouses() {
    return 'Hello'
  }
}