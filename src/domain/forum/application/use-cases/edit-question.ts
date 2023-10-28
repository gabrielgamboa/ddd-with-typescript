import { QuestionsRepository } from "../../domain/repositories/questions-repository";

interface EditQuestionUseCaseRequest {
  questionId: string;
  authorId: string;
  content: string;
  title: string;
}

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    questionId,
    authorId,
    content,
    title,
  }: EditQuestionUseCaseRequest): Promise<void> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error("Question doesnt exists");
    }

    if (question.authorId.toString() !== authorId) {
      throw new Error("Not allowed");
    }

    question.changeContent(content);
    question.changeTitle(title);

    await this.questionsRepository.update(question);
  }
}
