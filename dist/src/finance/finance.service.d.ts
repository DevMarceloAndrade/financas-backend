import { PrismaService } from '../prisma.service.js';
export declare class FinanceService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(type: string, period?: string): Promise<({
        transactions: {
            id: string;
            createdAt: Date;
            desc: string;
            amount: number;
            itemId: string;
        }[];
    } & {
        id: string;
        type: string;
        period: string;
        group: string;
        name: string;
        forecast: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    createItem(data: {
        type: string;
        period: string;
        group: string;
        name: string;
        forecast: number;
    }): Promise<{
        transactions: {
            id: string;
            createdAt: Date;
            desc: string;
            amount: number;
            itemId: string;
        }[];
    } & {
        id: string;
        type: string;
        period: string;
        group: string;
        name: string;
        forecast: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteItem(id: string): Promise<{
        id: string;
        type: string;
        period: string;
        group: string;
        name: string;
        forecast: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addTransaction(itemId: string, data: {
        desc: string;
        amount: number;
    }): Promise<{
        id: string;
        createdAt: Date;
        desc: string;
        amount: number;
        itemId: string;
    }>;
    removeTransaction(txId: string): Promise<{
        id: string;
        createdAt: Date;
        desc: string;
        amount: number;
        itemId: string;
    }>;
}
