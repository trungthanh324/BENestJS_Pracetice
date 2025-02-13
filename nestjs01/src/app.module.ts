import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CartModule } from './modules/cart/cart.module';
import { PostModule } from './modules/post/post.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import * as Joi from '@hapi/joi';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule,
            CartModule,
            PostModule,
            ConfigModule.forRoot({
              validationSchema: Joi.object({
                POSTGRES_HOST: Joi.string().required(),
                POSTGRES_PORT: Joi.number().required(),
                POSTGRES_USER: Joi.string().required(),
                POSTGRES_PASSWORD: Joi.string().required(),
                POSTGRES_DB: Joi.string().required(),
                // PORT: Joi.number(),
              }),
              isGlobal : true
            }),
            DatabaseModule
  ],
})
export class AppModule {}
