import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/bases/dto/base.dto';

@ObjectType('Post')
export class PostDTO extends BaseDTO {
  @FilterableField()
  title: string;

  @FilterableField()
  description: string;

  @FilterableField()
  author: string;

  @FilterableField()
  publish: string;

  @FilterableField()
  postArticle: string;
}
