import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

let answersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer", () => {
  beforeEach(() => {
    answersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(answersRepository);
  });

  it("should be able to answer a question", async () => {
    const answer = await sut.execute({
      content: "New Answer",
      questionId: "1",
      instructorId: "1",
    });

    expect(answer).toBeTruthy();
    expect(answer.content).toEqual("New Answer");
    expect(answersRepository.answers[0].id).toEqual(answer.id);
  });
});
