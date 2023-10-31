import { Id } from "@/core/value-objects/id";
import { Answer } from "../entities/answer";

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  create(answer: Answer): Promise<void>;
  delete(answer: Answer): Promise<void>;
}
