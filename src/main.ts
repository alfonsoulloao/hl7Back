import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Tiempos de Espara')
    .setDescription('servicios para cumplir flujo de interhoperabilidad')
    .setVersion('1.0')
    .addTag('inicio')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  app.setGlobalPrefix('api');
  await app.listen(environment.port);
}
bootstrap();
