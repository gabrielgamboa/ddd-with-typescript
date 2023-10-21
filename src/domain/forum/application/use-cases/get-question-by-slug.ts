import { Question } from "../../domain/entities/question";
import { QuestionsRepository } from "../../domain/repositories/questions-repository";

interface GetQuestionBySlugUseCaseRequest {
  slug: string;
}

export class GetQuestionBySlugUseCase {
  constructor(private readonly questionsRepository: QuestionsRepository) {}

  async execute({ slug }: GetQuestionBySlugUseCaseRequest): Promise<Question> {
    const question = await this.questionsRepository.findBySlug(slug);
    if (!question) throw new Error("Question not found");
    return question;
  }
}
