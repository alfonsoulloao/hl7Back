import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InicioController } from './controllers/inicio.controller';
import { AuthController } from './controllers/auth.controller';
import { LoginServices } from './services/login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './models/entities/medico.entity';
import { EventoInicioService } from './services/evento-inicio/evento-inicio.service';
import { ValueSet } from './models/entities/value-set.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password123#@!',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: false
    }),
    TypeOrmModule.forFeature([Medico, ValueSet])
  ],
  controllers: [AppController, InicioController, AuthController],
  providers: [AppService, LoginServices, EventoInicioService],
})
export class AppModule { }
