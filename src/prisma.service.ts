import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // Na v7, se você quer forçar a URL via código sem adaptadores complexos:
        super({
            // @ts-ignore - Às vezes o types do Prisma 7 tem conflito com o schema vazio
            datasourceUrl: process.env.DATABASE_URL,
        });
    }

    async onModuleInit() {
        await this.$connect();
    }
}