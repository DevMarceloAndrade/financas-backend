import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  // 1. Buscar todos os itens (separados por tipo e período)
  async findAll(type: string, period?: string) {
    return this.prisma.item.findMany({
      where: {
        type: type,
        ...(period && { period }), // Filtra por período se for fornecido
      },
      include: {
        transactions: true, // Traz os lançamentos junto com o item principal
      },
    });
  }

  // 2. Criar um novo Tópico/Ativo
  async createItem(data: { type: string; period: string; group: string; name: string; forecast: number }) {
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

  // 3. Deletar um Tópico/Ativo inteiro (Cascade deleta as transações)
  async deleteItem(id: string) {
    try {
      return await this.prisma.item.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException('Item não encontrado.');
    }
  }

  // 4. Adicionar um lançamento (Transaction) a um Tópico
  async addTransaction(itemId: string, data: { desc: string; amount: number }) {
    return this.prisma.transaction.create({
      data: {
        desc: data.desc,
        amount: Number(data.amount),
        itemId: itemId,
      },
    });
  }

  // 5. Remover um lançamento (Transaction)
  async removeTransaction(txId: string) {
    try {
      return await this.prisma.transaction.delete({ where: { id: txId } });
    } catch (error) {
      throw new NotFoundException('Transação não encontrada.');
    }
  }
}