import { Id } from "@/core/value-objects/id";
import { AnswersRepository } from "../../domain/repositories/answers-repository";

interface DeleteAnswerUseCaseRequest {
  answerId: string;
  authorId: string;
}

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<void> {
    const answer = await this.answersRepository.findById(new Id(answerId));

    if (!answer) {
      throw new Error("Answer doesnt exists");
    }

    if (answer.authorId.toString() !== authorId) {
      throw new Error("Not allowed");
    }

    await this.answersRepository.delete(answer);
  }
}
