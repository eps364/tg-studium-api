import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid Title' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid Description' })
    description: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid author' })
    author: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid publish' })
    publish: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid postArticle' })
    postArticle: string;
}
