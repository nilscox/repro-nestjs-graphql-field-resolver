import { Module } from '@nestjs/common';
import { AuthorsResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsService, PostsService } from './services';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  providers: [
    AuthorsResolver,
    AuthorsService,
    PostsService,
  ],
})
export class AppModule {}
