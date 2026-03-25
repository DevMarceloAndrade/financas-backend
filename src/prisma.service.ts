import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaLibSql } from '@prisma/adapter-libsql'; // Alterado de SQL para Sql
import { createClient } from '@libsql/client';
import { Prisma } from '@prisma/client';
import PrismaClient = Prisma.PrismaClient;

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // 1. Criamos o objeto de configuração
        const config = {
            url: process.env.DATABASE_URL as string,
        };

        // 2. Criamos o cliente do LibSQL
        const libsql = createClient(config);

        // 3. O adaptador espera o cliente, mas se o TS reclamar do tipo,
        // garantimos que ele aceite a instância do libsql usando 'as any'
        // ou passando a configuração se o seu pacote for uma versão experimental.
        const adapter = new PrismaLibSql(libsql as any);

        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}