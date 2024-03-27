import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import * as DatabaseConfig from 'config/database.config';

@Module({
  imports: [
    MongooseModule.forRoot(DatabaseConfig.CONN_STRING, {
      dbName: 'rosid',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
