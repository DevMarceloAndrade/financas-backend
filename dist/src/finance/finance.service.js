"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let FinanceService = class FinanceService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(type, period) {
        return this.prisma.item.findMany({
            where: {
                type: type,
                ...(period && { period }),
            },
            include: {
                transactions: true,
            },
        });
    }
    async createItem(data) {
        return this.prisma.item.create({
            data: {
                type: data.type,
                period: data.period,
                group: data.group,
                name: data.name,
                forecast: Number(data.forecast),
            },
            include: { transactions: true },
        });
    }
    async deleteItem(id) {
        try {
            return await this.prisma.item.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException('Item não encontrado.');
        }
    }
    async addTransaction(itemId, data) {
        return this.prisma.transaction.create({
            data: {
                desc: data.desc,
                amount: Number(data.amount),
                itemId: itemId,
            },
        });
    }
    async removeTransaction(txId) {
        try {
            return await this.prisma.transaction.delete({ where: { id: txId } });
        }
        catch (error) {
            throw new common_1.NotFoundException('Transação não encontrada.');
        }
    }
};
exports.FinanceService = FinanceService;
exports.FinanceService = FinanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FinanceService);
//# sourceMappingURL=finance.service.js.map