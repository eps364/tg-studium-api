import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateSessionInput {
    token: string
}
