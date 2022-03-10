import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('User')
export class UserDTO extends BaseDTO {
    userName: string

    userEmail: string

    userPassword: string
}
