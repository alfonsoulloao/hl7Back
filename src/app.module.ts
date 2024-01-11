import { Module } from '@nestjs/common';

// modulos
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InicioController } from './controllers/inicio.controller';
import { AuthController } from './controllers/auth.controller';
import { LoginServices } from './services/login.service';

// componentes
import { Diagnostico } from './models/entities/diagnostico.entity';
import { EventoInicioService } from './services/evento-inicio.service';
import { ValueSet } from './models/entities/value-set.entity';
import { CentroAsistencial } from './models/entities/centro-asistencial.entity';
import { Medico } from './models/entities/medico.entity';
import { environment } from './environments/environment';

const env = environment.mySqlDb;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.host,
      port: env.port,
      username: env.user,
      password: env.password,
      database: env.database,
      autoLoadEntities: true,
      synchronize: false
    }),
    TypeOrmModule.forFeature([Medico, ValueSet, Diagnostico, CentroAsistencial])
  ],
  controllers: [AppController, InicioController, AuthController],
  providers: [AppService, LoginServices, EventoInicioService],
})
export class AppModule { }
