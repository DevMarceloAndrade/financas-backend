import { FinanceService } from './finance.service';
export declare class FinanceController {
    private readonly financeService;
    constructor(financeService: FinanceService);
    findAll(type: string, period: string): Promise<({
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
    createItem(body: {
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
    addTransaction(itemId: string, body: {
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
