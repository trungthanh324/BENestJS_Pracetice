import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from 'src/dto/post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Get()
    getListPost(){
        return this.postService.getListPost()
    }

    @Post()
    createPost(@Body() postDto: PostDto){
        return this.postService.createPost(postDto)
    }
}
