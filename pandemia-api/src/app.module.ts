import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { Httpservice } from './injectables/app.service';
import { Csv2 } from './injectables/crv2';
import { SendFile } from './injectables/file.uploader';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [Httpservice,Csv2,SendFile],
})
export class AppModule {}
