import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { ChooseQuestionBestAnswerUseCase } from "./choose-question-best-answer";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { makeQuestion } from "test/factories/make-question";
import { makeAnswer } from "test/factories/make-answer";

let questionsRepository: InMemoryQuestionsRepository;
let answersRepository: InMemoryAnswersRepository;
let sut: ChooseQuestionBestAnswerUseCase;

describe("Choose Question Best Answer", () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository();
    answersRepository = new InMemoryAnswersRepository();

    sut = new ChooseQuestionBestAnswerUseCase(
      answersRepository,
      questionsRepository,
    );
  });

  it("should be able to set a best answer to a question", async () => {
    const question = makeQuestion();
    const answer = makeAnswer({
      questionId: question.id,
    });

    await questionsRepository.create(question);
    await answersRepository.create(answer);

    const updatedQuestion = await sut.execute({
      authorId: question.authorId.toString(),
      answerId: answer.id.toString(),
    });

    expect(updatedQuestion).toBeDefined();
  });
});
