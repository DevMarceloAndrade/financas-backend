import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super({
            datasourceUrl: 'file:./dev.db', // Ou process.env.DATABASE_URL
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
}