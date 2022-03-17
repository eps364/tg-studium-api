import { FilterableRelation } from '@nestjs-query/query-graphql'
import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { User } from 'src/modules/users/entities/users.entity'
import { Column, Entity, OneToOne } from 'typeorm'

@Entity()
@FilterableRelation('user', () => User)
export class Session extends BaseEntity {
    @Column()
    token: string

    @OneToOne(() => User, (user) => user.session)
    user: User
}
