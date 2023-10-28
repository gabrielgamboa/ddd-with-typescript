import { Id } from "@/core/value-objects/id";
import { Answer } from "@/domain/forum/domain/entities/answer";
import { faker } from "@faker-js/faker";

export function makeAnswer(props: Partial<Answer> = {}, id?: Id) {
  return Answer.create(
    {
      authorId: new Id(),
      questionId: new Id(),
      content: faker.lorem.text(),
      ...props,
    },
    id,
  );
}
