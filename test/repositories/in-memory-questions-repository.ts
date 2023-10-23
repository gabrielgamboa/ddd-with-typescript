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

  async delete(question: Question): Promise<void> {
    const index = this.questions.findIndex((item) => item.id === question.id);
    this.questions.splice(index, 1);
  }

  async findById(id: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.id.toString() === id,
    );

    if (!question) return null;

    return question;
  }
}
