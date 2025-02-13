import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from 'src/dto/post.dto';
import Post from 'src/model/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepo : Repository<Post>
    ){}

    getListPost(){
        return this.postRepo.find()
    }

    createPost(postDto : PostDto){
       
        return "newPost"
    }
}
