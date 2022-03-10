import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
    userName: string

    userEmail: string

    userPassword: string
}
