import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Terapkan ValidationPipe secara global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Hapus field yang tidak ada di DTO
      forbidNonWhitelisted: true, // Return error jika ada field yang tidak diizinkan
      transform: true, // Konversi input ke tipe data DTO secara otomatis
    }),
  );

  await app.listen(3000);
}
bootstrap();
