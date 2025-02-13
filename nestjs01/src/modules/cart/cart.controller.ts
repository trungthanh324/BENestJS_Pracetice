import { Body, Controller, Post, Req, Res, Get, Param } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { DataResponseType } from 'src/global/dataResponsetype';
import { HttpMessage, HttpStatus } from 'src/global/enum';
import { CartService } from './cart.service';
import { UserModel } from 'src/model/user.model';
import { retry } from 'rxjs';
import { CartModel } from 'src/model/cart.model';
import { CartDto } from 'src/dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @Get()
    getItemFromCart(){
        try {
           return new DataResponseType<CartModel>(
            this.cartService.getItemFromCart(),
            HttpMessage.SUCCESS,
            HttpStatus.SUCCESS
           ) 
        } catch (error) {
            return new DataResponseType<CartModel[]>(
                [],
                HttpMessage.ERROR,
                HttpStatus.ERROR
            )
        }
    }

    @Post()
    addToCart(@Body() userDto: CartDto): DataResponseType<UserModel> {
        try {
            return new DataResponseType<UserModel>(
                this.cartService.addToCart(userDto),
                HttpMessage.SUCCESS,
                HttpStatus.SUCCESS
            )
        } catch (error) {
            return new DataResponseType<UserDto>(
                [],
                HttpMessage.ERROR,
                HttpStatus.ERROR
            )
        }
    }
    
    @Get("/:id")
    makePurchase(@Param("id") id : number): DataResponseType<CartModel>{
        try {
            const cart = this.cartService.makePurchase(Number(id))
            if(!cart){
                return new DataResponseType<CartModel>(
                    [],
                    HttpMessage.PAYMENT_ERROR,
                    HttpStatus.ERROR                
                )  
            }
            return new DataResponseType<CartModel>(
                cart,
                HttpMessage.PAYMENT_SUCCESSFULLY,
                HttpStatus.SUCCESS
            )
        } catch (error) {
            return new DataResponseType<CartModel>(
                [],
                HttpMessage.PAYMENT_ERROR,
                HttpStatus.ERROR                
            )
        }
    }
}
