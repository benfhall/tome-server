import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigReader } from 'neconfig';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigReader);
  const port = config.getIntOrThrow('PORT');
  app.enableCors();
  await app.listen(port);
  console.log('Listening on: ', port)
}
bootstrap();
