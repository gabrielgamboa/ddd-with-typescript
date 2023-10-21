import { Answer } from "@/domain/forum/domain/entities/answer";
import { AnswersRepository } from "@/domain/forum/domain/repositories/answers-repository";

export class InMemoryAnswersRepository implements AnswersRepository {
  answers: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.answers.push(answer);
  }
}
