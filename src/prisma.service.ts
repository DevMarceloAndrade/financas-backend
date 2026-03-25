import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql'; // Alterado de SQL para Sql
import { createClient } from '@libsql/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const libsql = createClient({
            url: process.env.DATABASE_URL!,
        });

        const adapter = new PrismaLibSql(libsql); // Alterado de SQL para Sql

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}