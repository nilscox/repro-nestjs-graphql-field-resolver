import { Injectable } from '@nestjs/common';

const db = {
  users: [
    { id: 1, firstName: 'nils', lastName: 'cox' },
    { id: 2, firstName: 'mano', lastName: 'cox' },
  ],
  posts: [
    { id: 1, authorId: 1, title: 'salut', votes: 10 },
    { id: 2, authorId: 2, title: 'hello', votes: null },
    { id: 3, authorId: 1, title: 'hola', votes: 1 },
    { id: 4, authorId: 2, title: 'halo', votes: 4 },
  ],
};

@Injectable()
export class AuthorsService {
  findOneById(id: number) {
    return db.users.find(user => user.id === id);
  }
}

@Injectable()
export class PostsService {
  findAll({ authorId }: { authorId: number }) {
    return db.posts.filter(post => post.authorId === authorId);
  }
}
