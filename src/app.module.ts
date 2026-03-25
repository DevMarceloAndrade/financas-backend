import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { FinanceModule } from './finance/finance.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    FinanceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
