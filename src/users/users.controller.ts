import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto'; // Import DTO
import { ValidationPipe } from '@nestjs/common'; // Import ValidationPipe

@Controller('users')
export class UsersController {
  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    // Simulasi respon setelah data berhasil divalidasi dan diterima
    return {
      message: 'User created successfully!',
      user: createUserDto, // Menampilkan data yang sudah divalidasi
    };
  }
}
