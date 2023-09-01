import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { AppController } from './app.controller';
import { ServiceA } from './service-A';
import { ServiceB } from './service-B';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [AppController],
  providers: [ServiceA, ServiceB],
})
export class AppModule {}
