import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const libsql = createClient({
            url: process.env.DATABASE_URL!,
        });

        const adapter = new PrismaLibSql(libsql);

        // Passamos o adaptador para o super (PrismaClient)
        super({ adapter });
    }

    async onModuleInit() {
        // No Prisma 7 com Adaptadores, o $connect é opcional, 
        // mas vamos mantê-lo para garantir a prontidão do serviço
        await (this as any).$connect();
    }
}