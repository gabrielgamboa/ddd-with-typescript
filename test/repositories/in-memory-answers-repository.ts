import { Id } from "@/core/value-objects/id";
import { Answer } from "@/domain/forum/domain/entities/answer";
import { AnswersRepository } from "@/domain/forum/domain/repositories/answers-repository";

export class InMemoryAnswersRepository implements AnswersRepository {
  answers: Answer[] = [];

  async findById(id: Id): Promise<Answer | null> {
    const answer = this.answers.find(
      (answer) => answer.id.toValue() === id.toValue(),
    );

    if (!answer) return null;

    return answer;
  }

  async delete(answer: Answer): Promise<void> {
    const index = this.answers.findIndex(
      (item) => item.id.toValue() === answer.id.toValue(),
    );
    this.answers.splice(index, 1);
  }

  async create(answer: Answer): Promise<void> {
    this.answers.push(answer);
  }
}
