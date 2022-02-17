import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  author: string;

  @Field()
  publish: string;

  @Field()
  postArticle: string;
}
