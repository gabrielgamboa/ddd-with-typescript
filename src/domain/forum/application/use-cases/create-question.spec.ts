import { QuestionsRepository } from "@/domain/forum/domain/repositories/questions-repository";
import { Question } from "../../domain/entities/question";
import { CreateQuestionUseCase } from "./create-question";

class QuestionRepositoryStub implements QuestionsRepository {
  async create(question: Question): Promise<void> {
    console.log(question);
  }
}

test("Create an question", async () => {
  const questionRepositoryStub = new QuestionRepositoryStub();
  const questionQuestion = new CreateQuestionUseCase(questionRepositoryStub);

  const { question } = await questionQuestion.execute({
    content: "New question",
    title: "Question",
    authorId: "1",
  });

  expect(question.id).toBeTruthy();
  expect(question.content).toEqual("New question");
  expect(question.slug.value).toEqual("question");
});
