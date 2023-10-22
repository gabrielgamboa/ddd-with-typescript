import { Id } from "@/core/value-objects/id";
import { Question } from "@/domain/forum/domain/entities/question";
import { Slug } from "@/domain/forum/domain/entities/value-objects/slug";
import { faker } from "@faker-js/faker";

export function makeQuestion(props: Partial<Question> = {}, id?: Id) {
  return Question.create({
    authorId: new Id(),
    content: faker.lorem.text(),
    title: faker.lorem.sentence(),
    ...props,
  });
}
