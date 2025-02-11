export class UserModel{
    id?: number
    name?: string

    constructor({id,name}){
        if(id != null) this.id = id
        if(name != null) this.name = name
    }
}