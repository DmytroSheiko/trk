import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrakerModule } from './traker/traker.module';
import { TrackerModule } from './tracker/tracker.module';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [TrakerModule, TrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
