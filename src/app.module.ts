import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BuildingsModule } from './buildings/buildings.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BuildingsModule, ConfigModule.forRoot({
  isGlobal: true,
  })],
controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
