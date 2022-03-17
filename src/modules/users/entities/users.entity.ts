import { BaseEntity } from 'src/common/bases/entities/base.entity'
import { Session } from 'src/modules/session/entities/session.entity'
import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { Post } from '../../posts/entities/posts.entity'

@Entity()
export class User extends BaseEntity {
    @Column()
    userName: string

    @Column()
    userEmail: string

    @Column()
    userPassword: string

    @OneToMany(() => Post, (posts) => posts.user)
    posts: Post[]

    @OneToOne(() => Session, (session) => session.user)
    session: Session
}
