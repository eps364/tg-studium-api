import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Session')
export class SessionDTO extends BaseDTO {
    token: string
}
