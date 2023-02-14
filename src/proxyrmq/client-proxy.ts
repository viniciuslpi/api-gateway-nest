import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ClientProxySmartRanking {

    getClientProxyAdminBackendInstance(): ClientProxy {        

            return ClientProxyFactory.create({
            transport: Transport.TCP,
            // options: {
            //   urls: ['amqp://user:q7W2UQk249gR@18.210.17.173:5672/smartranking'],
            //   queue: 'admin-backend'
            // }
          })



    }

}