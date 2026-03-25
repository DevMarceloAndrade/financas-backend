import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createClient } from '@libsql/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // 1. Cria o cliente do banco de dados (libsql funciona com SQLite)
        const libsql = createClient({
            url: process.env.DATABASE_URL as string,
        });

        // 2. Cria o adaptador para o Prisma
        const adapter = new PrismaLibSql(libsql);

        // 3. Passa o adaptador para o construtor do PrismaClient
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}