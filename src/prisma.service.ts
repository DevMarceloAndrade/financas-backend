import { Injectable, OnModuleInit } from '@nestjs/common';
// Mantenha o import apontando para a pasta customizada que configuramos antes
import { PrismaClient } from './generated/prisma/client.js'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super({
            accelerateUrl: "postgresql://postgres:1010@localhost:5432/financedb?schema=public", // Use a variável de ambiente para a URL de conexão
    });
    }

    async onModuleInit() {
        await this.$connect();
    }
}