import { Question } from "@/domain/forum/domain/entities/question";
import { QuestionsRepository } from "@/domain/forum/domain/repositories/questions-repository";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  questions: Question[] = [];

  async create(question: Question): Promise<void> {
    this.questions.push(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.slug.value === slug,
    );

    if (!question) return null;

    return question;
  }
}
