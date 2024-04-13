import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // apply the LoggerMiddleware to the songs route
    // consumer.apply(LoggerMiddleware).forRoutes('*'); // apply the LoggerMiddleware to all routes
    // consumer.apply(LoggerMiddleware).forRoutes(SongController); // apply the LoggerMiddleware to the SongController
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'songs', method: RequestMethod.POST }); // apply the LoggerMiddleware to the POST method of the songs route
  }
}
