import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [ KafkaModule, MongooseModule.forRoot('mongodb://localhost:27017/iko', { // KafkaModule,
    autoCreate: true,
  }), UserModule],
  controllers: [AppController],
  providers: [TestConsumer, AppService, ], // TestConsumer
})
export class AppModule { }
