import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    // definir una carpeta de archivos estaticos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    // definir la conexión con mongodb
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule,

    CommonModule,

    SeedModule,
  ],
})
export class AppModule {}
