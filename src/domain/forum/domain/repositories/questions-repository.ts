import { Question } from "../entities/question";

export interface QuestionsRepository {
  create(question: Question): Promise<void>;
  findBySlug(slug: string): Promise<Question | null>;
  findById(id: string): Promise<Question | null>;
  update(question: Question): Promise<void>;
  delete(question: Question): Promise<void>;
}
