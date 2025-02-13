import { Get, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserDto } from 'src/dto/user.dto';
import { UserModel } from 'src/model/user.model';
import { CartModel } from 'src/model/cart.model';
import { CartDto } from 'src/dto/cart.dto';

@Injectable()
export class CartService {
    constructor(private readonly userService: UserService){}
    private arrUserCart : CartModel[] = [
        {id: 1, name: "thanh1"},
        {id: 2, name: "thanh2"},
        {id: 3, name: "thanh3"},
        {id: 4, name: "thanh4"},
        {id: 5, name: "thanh5"},
        {id: 6, name: "thanh6"},
        {id: 7, name: "thanh7"},
    ]

    addToCart(userDto: CartDto) : CartModel{
        let newCartUser: CartModel = {
            id: userDto.id,
            name : userDto.name
        }
        this.arrUserCart.push(newCartUser)
        return newCartUser
    }

    getItemFromCart(){
        return this.arrUserCart
    }

    makePurchase(id : number): CartModel | undefined{
        return this.arrUserCart.find(item => item.id === Number(id))
    }

}
