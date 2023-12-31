import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import { ReportService } from './report/report.service';
import { AppService } from './app.service';

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController],
  providers: [AppService,ReportService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }],
})
export class AppModule {}
