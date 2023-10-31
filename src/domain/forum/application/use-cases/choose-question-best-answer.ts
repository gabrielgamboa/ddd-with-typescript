import { Id } from "@/core/value-objects/id";
import { AnswersRepository } from "../../domain/repositories/answers-repository";
import { QuestionsRepository } from "../../domain/repositories/questions-repository";

interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private readonly answersRepository: AnswersRepository,
    private readonly questionsRepository: QuestionsRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestAnswerUseCaseRequest) {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found");
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toValue(),
    );

    if (!question) {
      throw new Error("Question not found");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not allowed");
    }

    question.changeBestAnswerId(question.id);

    return question;
  }
}
