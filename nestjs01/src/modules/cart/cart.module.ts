import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [UserModule]
})
export class CartModule {}
