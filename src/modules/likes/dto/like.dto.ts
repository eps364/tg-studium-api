import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/bases/dto/base.dto';

@ObjectType('Like')
export class LikeDTO extends BaseDTO {
    type: number

    comentId: string

    userId: string
}
