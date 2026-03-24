import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  // ROTA: GET /finance?type=gastos&period=2026-03
  @Get()
  findAll(@Query('type') type: string, @Query('period') period: string) {
    if (!type) throw new Error("O parâmetro 'type' (gastos/investimentos) é obrigatório.");
    return this.financeService.findAll(type, period);
  }

  // ROTA: POST /finance
  @Post()
  createItem(@Body() body: { type: string; period: string; group: string; name: string; forecast: number }) {
    return this.financeService.createItem(body);
  }

  // ROTA: DELETE /finance/:id
  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.financeService.deleteItem(id);
  }

  // ROTA: POST /finance/:itemId/transactions
  @Post(':itemId/transactions')
  addTransaction(@Param('itemId') itemId: string, @Body() body: { desc: string; amount: number }) {
    return this.financeService.addTransaction(itemId, body);
  }

  // ROTA: DELETE /finance/transactions/:txId
  @Delete('transactions/:txId')
  removeTransaction(@Param('txId') txId: string) {
    return this.financeService.removeTransaction(txId);
  }
}