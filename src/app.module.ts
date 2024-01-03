import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InicioController } from './controllers/inicio.controller';
import { AuthController } from './controllers/auth.controller';
import { LoginServices } from './services/login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './models/entities/medico.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mydb',
      autoLoadEntities:true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Medico])
  ],
  controllers: [AppController, InicioController, AuthController],
  providers: [AppService, LoginServices],
})
export class AppModule {}
