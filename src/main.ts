import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter' 
import * as momentTimezone from 'moment-timezone'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor())
  app.useGlobalFilters(new AllExceptionsFilter());

  Date.prototype.toJSON = function(): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS')
  }

  await app.listen(8080);
}
bootstrap();
