var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { FinanceService } from './finance.service.js';
let FinanceController = class FinanceController {
    financeService;
    constructor(financeService) {
        this.financeService = financeService;
    }
    findAll(type, period) {
        if (!type)
            throw new Error("O parâmetro 'type' (gastos/investimentos) é obrigatório.");
        return this.financeService.findAll(type, period);
    }
    createItem(body) {
        return this.financeService.createItem(body);
    }
    deleteItem(id) {
        return this.financeService.deleteItem(id);
    }
    addTransaction(itemId, body) {
        return this.financeService.addTransaction(itemId, body);
    }
    removeTransaction(txId) {
        return this.financeService.removeTransaction(txId);
    }
};
__decorate([
    Get(),
    __param(0, Query('type')),
    __param(1, Query('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "findAll", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "createItem", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "deleteItem", null);
__decorate([
    Post(':itemId/transactions'),
    __param(0, Param('itemId')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "addTransaction", null);
__decorate([
    Delete('transactions/:txId'),
    __param(0, Param('txId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanceController.prototype, "removeTransaction", null);
FinanceController = __decorate([
    Controller('finance'),
    __metadata("design:paramtypes", [FinanceService])
], FinanceController);
export { FinanceController };
//# sourceMappingURL=finance.controller.js.map