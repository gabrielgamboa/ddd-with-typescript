import { Id } from "@/core/value-objects/id";
import { Question } from "@/domain/forum/domain/entities/question";
import { Slug } from "@/domain/forum/domain/entities/value-objects/slug";

export function makeQuestion(props: Partial<Question> = {}) {
  return Question.create({
    authorId: new Id("1"),
    content: "any content",
    title: "any title",
    slug: new Slug("any-title"),
    ...props,
  });
}
