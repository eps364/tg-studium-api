import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdatePostInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid Title' })
    title: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid Description' })
    description: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid author' })
    author: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid publish' })
    publish: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid postArticle' })
    postArticle: string;
}
