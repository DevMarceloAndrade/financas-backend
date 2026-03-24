import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
    super({
      datasources: {
        db: {
          url: 'file:./dev.db', // Use o mesmo nome (db) que está no seu schema.prisma
        },
      },
    });
  }
    async onModuleInit() {
        await this.$connect();
    }
}