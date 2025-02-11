import { Controller, Get, Param, Post, Put, Delete, Body, ValidationPipe} from '@nestjs/common';
import { UserService } from './user.service';
import { DataResponseType } from 'src/global/dataResponsetype';
import { UserModel } from 'src/model/user.model';
import { HttpMessage, HttpStatus } from 'src/global/enum';
import { UserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    getAllUser(): DataResponseType<UserModel[]>{
      try {
        return new DataResponseType<UserModel[]>(
            this.userService.getAllUser(),
            HttpMessage.SUCCESS,
            HttpStatus.SUCCESS
        )
      } catch (error) {
        return new DataResponseType<UserModel[]>(
            [],
            HttpMessage.ERROR,
            HttpStatus.ERROR
        )
      }
    }

    @Get('/:id')
    getDetailUserById(@Param("id") id : number): DataResponseType<UserModel>{
        try {
            const usr = this.userService.getDetailUserById(Number(id))
            if(!usr){
                return new DataResponseType<UserModel>(
                    [],
                    HttpMessage.ERROR,
                    HttpStatus.ERROR
                )
            }
            return new DataResponseType<UserModel>(
                usr,
                HttpMessage.SUCCESS,
                HttpStatus.SUCCESS
            )  
        } catch (error) {
            return new DataResponseType<UserModel>(
                [],
                HttpMessage.ERROR,
                HttpStatus.ERROR
            )
        }
    }

    @Post()
    createUser(@Body(new ValidationPipe) userDto : UserDto ): DataResponseType<UserModel>{
       try {
        return new DataResponseType<UserModel>(
            this.userService.createUser(userDto),
            HttpMessage.SUCCESS,
            HttpStatus.SUCCESS
        )
       } catch (error) {
            return new DataResponseType<UserModel>(
                [],
                HttpMessage.ERROR,
                HttpStatus.ERROR
            )
       }
    }

    @Put('/:id')
    updateUser(@Body(new ValidationPipe) userDto : UserDto, @Param("id") id : string, ): DataResponseType<UserModel> {
        console.log("Received userDto:", userDto); // Debug
        try {
            return new DataResponseType<UserModel>(
                this.userService.updateUser(userDto, Number(id)),
                HttpMessage.SUCCESS,
                HttpStatus.SUCCESS
              )
        } catch (error) {
            return new DataResponseType<UserModel>(
               [],
               HttpMessage.ERROR,
               HttpStatus.ERROR
              ) 
        }
    }

    @Delete("/:id")
    deleteUser(@Param("id") id : string): DataResponseType<boolean>{
        try {
            return new DataResponseType<boolean>(
                this.userService.deleteUser(Number(id)),
                HttpMessage.SUCCESS,
                HttpStatus.SUCCESS
            )
        } catch (error) {
            return new DataResponseType<boolean>(
            [],
            HttpMessage.ERROR,
            HttpStatus.ERROR
            )
        }
    }
}
