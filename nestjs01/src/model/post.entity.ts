import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "posts"}) // ten bang
class Post{
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    content?: string

    @Column()
    title?: string
}
export default Post;


 