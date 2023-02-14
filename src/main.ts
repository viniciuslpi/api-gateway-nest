import { NestFactory } from '@nestjs/core';
import momentTimezone from 'moment-timezone';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/http-exception.filter'
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

  Date.prototype.toJSON = function(): any {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS')
  }

  await app.listen(8080);
}
bootstrap();
