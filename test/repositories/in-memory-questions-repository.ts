import { Question } from "@/domain/forum/domain/entities/question";
import { QuestionsRepository } from "@/domain/forum/domain/repositories/questions-repository";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  questions: Question[] = [];

  async create(question: Question): Promise<void> {
    this.questions.push(question);
  }
}
