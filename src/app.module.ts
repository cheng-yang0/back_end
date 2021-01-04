import { Module } from '@nestjs/common';
import { UserModule } from './server/user/user.module';
import { UserController } from './server/user/user.controller';
import { UserService } from './server/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/xxx'), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService]
})
export class AppModule {}