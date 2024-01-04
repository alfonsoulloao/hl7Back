import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginInput } from 'src/models/inputs/login.Input';
import { LoginServices } from 'src/services/login.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private readonly _service: LoginServices) { }

  @Post('/login')
  async findLogin(@Body() loginDto: LoginInput) {

    console.log("Entrando al controller");

    const result = await this._service.loginService(loginDto);

    if (!result) throw new BadRequestException('Credenciales invalidas');

    return JSON.stringify(result);

  }



}
