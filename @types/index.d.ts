import {PrismaClient} from '@prisma/client'
import {PrismaClientOptions} from '@prisma/client/runtime'

export {}

declare global {

  type CustomEventBridgeEvent = {
    action : string
  }
}

declare module "aws-lambda" {
  interface Context {
    plugin: {
      prisma : PrismaClient
    }
  }
}
