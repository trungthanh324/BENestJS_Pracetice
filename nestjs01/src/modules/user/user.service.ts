import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import{ UserModel } from 'src/model/user.model'
@Injectable()
export class UserService {
    private usr : UserModel[] = [
        {id : 1, name : "thanh1"},
        {id : 2, name : "thanh2"},
        {id : 3, name : "thanh3"},
        {id : 4, name : "thanh4"},
        {id : 5, name : "thanh5"}
    ]
        getAllUser(): UserModel[]{
            return this.usr
        }

        getDetailUserById(id: number): UserModel | undefined{
            return this.usr.find(item => item.id === Number(id))
        }
 
        createUser(userDto : UserDto): UserModel{
            let newUser : UserModel = {
                id : Math.random(),
                name : userDto.name
            }
            this.usr.push(newUser)
            return newUser
        }

        updateUser( usrDto : UserDto, id : number): UserModel{
            const index = this.usr.findIndex(item => item.id === Number(id))
            this.usr[index].name = usrDto.name
            return this.usr[index]
        }

        deleteUser(id: number){
            const index = this.usr.findIndex(item => item.id === Number(id))
            if(index != -1) {
                this.usr.splice(index, 1)
                return true
            }
            return false
        }
}
