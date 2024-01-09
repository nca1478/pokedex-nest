import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Definir prefijos en las rutas de la api
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      // Se utiliza para permitir o prohibir la validación de propiedades que no están definidas en el DTO
      whitelist: true,

      // Se utiliza para lanzar una excepción si se encuentra una propiedad que no está definida en el DTO.
      forbidNonWhitelisted: true,

      // Se utiliza para habilitar o deshabilitar la transformación de los datos de entrada.
      transform: true,

      // Opciones adicionales
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(process.env.PORT);

  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
