import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { BudgetAndExpensesModule } from './budget-and-expenses/budget-and-expenses.module';
import * as DatabaseConfig from 'config/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(DatabaseConfig.CONN_STRING, {
      dbName: 'rosid',
      user: 'admin',
      pass: 'admin4rosid',
    }),
    UsersModule,
    BudgetAndExpensesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
