import { MinLength } from "class-validator";

export class UserDto {
    
    @MinLength(5)
    name : string
}