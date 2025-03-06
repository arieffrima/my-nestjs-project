import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './greeting/greeting.module'; // Mengimpor GreetingModule
import { UsersModule } from './users/users.module';

@Module({
  imports: [GreetingModule, UsersModule], // Mengimpor GreetingModule
  controllers: [AppController], // Hanya AppController yang terdaftar di sini
  providers: [AppService], // Hanya AppService yang terdaftar di sini
})
export class AppModule {} // Pastikan AppModule diekspor di sini
