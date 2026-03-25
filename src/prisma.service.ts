import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// Ajuste o import abaixo se estiver usando o output customizado
import { PrismaClient } from '@prisma/client'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        // 1. A URL local vai AQUI, no pacote nativo 'pg'
        const pool = new Pool({ 
            connectionString: "postgresql://postgres:1010@localhost:5432/financedb?schema=public" 
        });
        
        // 2. O PrismaPg transforma o 'pool' em um adapter
        const adapter = new PrismaPg(pool as any);
        
        // 3. Você passa para o construtor a opção "adapter" que apareceu no seu autocomplete
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}