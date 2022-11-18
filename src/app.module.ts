import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { AppController } from './app.controller';

@Module({
  imports: [BuildingsModule],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
