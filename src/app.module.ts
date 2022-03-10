import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommentModule } from './modules/comments/comments.module'
import { ComplaintModule } from './modules/complaints/complaints.module'
import { LikeModule } from './modules/likes/likes.module'
import { PostModule } from './modules/posts/posts.module'
import { UserModule } from './modules/users/users.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            debug: true,
            playground: true,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        UserModule,
        PostModule,
        CommentModule,
        LikeModule,
        ComplaintModule,
    ],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
