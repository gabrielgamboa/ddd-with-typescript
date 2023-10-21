import { Id } from "@/core/value-objects/id";
import { Question } from "../../domain/entities/question";
import { QuestionsRepository } from "../../domain/repositories/questions-repository";

interface CreateQuestionUseCaseRequest {
  title: string;
  content: string;
  authorId: string;
}

interface CreateQuestionUseCaseResponse {
  question: Question;
}

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new Id(authorId),
      title,
      content,
    });

    await this.questionsRepository.create(question);

    return {
      question,
    };
  }
}
