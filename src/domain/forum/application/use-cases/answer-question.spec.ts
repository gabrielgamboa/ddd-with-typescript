import { Answer } from "../../domain/entities/answer";
import { AnswersRepository } from "../../domain/repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    console.log(answer);
  },
};

test("Create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    content: "New Answer",
    questionId: "1",
    instructorId: "1",
  });

  expect(answer).toBeTruthy();
  expect(answer.content).toEqual("New Answer");
});
