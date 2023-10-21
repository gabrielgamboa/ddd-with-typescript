import { CreateQuestionUseCase } from "./create-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";

let questionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create Question", () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(questionsRepository);
  });

  it("should be able to create a question", async () => {
    const { question } = await sut.execute({
      content: "New question",
      title: "Question",
      authorId: "1",
    });

    expect(question.id).toBeTruthy();
    expect(question.content).toEqual("New question");
    expect(question.slug.value).toEqual("question");
  });
});
