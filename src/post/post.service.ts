import {
    Injectable, InternalServerErrorException,
    NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
    ) { }

    async findAllPosts(): Promise<Post[]> {
        const posts = await this.postRepository.find();
        return posts;
    }

    async findPostById(id: string): Promise<Post> {
        const post = await this.postRepository.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return post;
    }

    async createPost(data: CreatePostInput): Promise<Post> {
        const post = this.postRepository.create(data);
        const postSaved = await this.postRepository.save(post);

        if (!postSaved) {
            throw new InternalServerErrorException(
                'Problem to create a post. Try again',
            );
        }

        return postSaved;
    }

    async updatePost(id: string, data: UpdatePostInput): Promise<Post> {
        const post = await this.findPostById(id);

        await this.postRepository.update(post, { ...data });

        const postUpdated = this.postRepository.create({ ...post, ...data });

        return postUpdated;
    }

    async deletePost(id: string): Promise<boolean> {
        const post = await this.findPostById(id);

        const deleted = await this.postRepository.delete(post);

        if (deleted) {
            return true;
        }

        return false;
    }
}
