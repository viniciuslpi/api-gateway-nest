import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { JogadoresModule } from './jogadores/jogadores.module';
import { ClientProxySmartRanking } from './proxyrmq/client-proxy'
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [CategoriasModule, JogadoresModule, ProxyRMQModule, AwsModule],
  controllers: [],
  providers: [ClientProxySmartRanking],
})
export class AppModule {}
