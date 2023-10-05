import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    // modulo para definir variables de entorno
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),

    // definir una carpeta con archivos estaticos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // definir la conexión con mongodb
    MongooseModule.forRoot(process.env.MONGODB),

    PokemonModule,

    CommonModule,

    SeedModule,
  ],
})
export class AppModule {
  private readonly configService: ConfigService;

  constructor() {}
}
