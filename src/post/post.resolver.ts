import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
    constructor(private postService: PostService) { }

    @Query(() => [Post])
    async posts(): Promise<Post[]> {
        const posts = await this.postService.findAllPosts();
        return posts;
    }

    @Query(() => Post)
    async post(@Args('id') id: string): Promise<Post> {
        const post = this.postService.findPostById(id);
        return post;
    }

    @Mutation(() => Post)
    async createPost(@Args('data') data: CreatePostInput): Promise<Post> {
        const post = await this.postService.createPost(data);
        return post;
    }

    @Mutation(() => Post)
    async updatePost(
        @Args('id') id: string,
        @Args('data') data: UpdatePostInput,
    ): Promise<Post> {
        const post = this.postService.updatePost(id, data);
        return post;
    }

    @Mutation(() => Boolean)
    async deletePost(@Args('id') id: string): Promise<boolean> {
        const deleted = await this.postService.deletePost(id);
        return deleted;
    }
}
