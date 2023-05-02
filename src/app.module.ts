import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuccesModule } from './succes/succes.module';
import { EchecModule } from './echec/echec.module';

@Module({
  imports: [SuccesModule, EchecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
