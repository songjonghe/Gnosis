import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // var serviceAccount = require('.././../serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert('./firebase-key.json'),
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
