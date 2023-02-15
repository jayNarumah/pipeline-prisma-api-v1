import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipelineModule } from './pipeline/pipeline.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PipelineModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
