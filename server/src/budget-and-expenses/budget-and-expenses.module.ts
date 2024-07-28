import { Module } from '@nestjs/common';
import { BudgetAndExpensesController } from './budget-and-expenses.controller';
import { BudgetAndExpensesService } from './budget-and-expenses.service';

@Module({
  controllers: [BudgetAndExpensesController],
  providers: [BudgetAndExpensesService]
})
export class BudgetAndExpensesModule {}
