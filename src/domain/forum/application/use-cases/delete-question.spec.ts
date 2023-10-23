import { makeQuestion } from "test/factories/make-question";
import { DeleteQuestionUseCase } from "./delete-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { Id } from "@/core/value-objects/id";

let questionsRepository: InMemoryQuestionsRepository;
let sut: DeleteQuestionUseCase;

describe("Delete Question", () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository();
    sut = new DeleteQuestionUseCase(questionsRepository);
  });

  it("should be able to delete a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new Id("author-id-1"),
      },
      new Id("id-1"),
    );
    questionsRepository.create(newQuestion);

    await sut.execute({
      questionId: "id-1",
      authorId: "author-id-1",
    });

    expect(questionsRepository.questions).toHaveLength(0);
  });

  it("should be able to delete a question", async () => {
    const newQuestion = makeQuestion({}, new Id("id-1"));

    questionsRepository.create(newQuestion);

    expect(async () => {
      await sut.execute({
        questionId: "id-1",
        authorId: "author-id-1",
      });
    }).rejects.toThrow();
  });
});
