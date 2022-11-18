import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';

@Module({
  imports: [BuildingsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
