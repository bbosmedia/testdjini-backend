import { Body, Controller, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingDto } from './building.dto';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {
  }

  @Post('')
  getHouses(@Body() dto:BuildingDto) {
    return this.buildingsService.getHouses(dto)
  }

  @Post('/sendemail')
  sendEmail(@Body() body: {html:string}){
    return this.buildingsService.sendEmail(body.html)
  }
}
