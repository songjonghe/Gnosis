import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './middlewares/auth/auth.module';
import { ProfileModule } from './profile/profile.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://tranvanhao016:hao123456@cluster0.mwofhtq.mongodb.net/'),
    UserModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
