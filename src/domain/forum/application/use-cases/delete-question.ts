import { QuestionsRepository } from "../../domain/repositories/questions-repository";

interface DeleteQuestionUseCaseRequest {
  questionId: string;
  authorId: string;
}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
  }: DeleteQuestionUseCaseRequest): Promise<void> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error("Question doesnt exists");
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error("Not allowed");
    }

    await this.questionsRepository.delete(question);
  }
}
