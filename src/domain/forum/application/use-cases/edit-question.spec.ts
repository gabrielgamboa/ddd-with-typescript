import { makeQuestion } from "test/factories/make-question";
import { EditQuestionUseCase } from "./edit-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { Id } from "@/core/value-objects/id";

let questionsRepository: InMemoryQuestionsRepository;
let sut: EditQuestionUseCase;

describe("Edit Question", () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository();
    sut = new EditQuestionUseCase(questionsRepository);
  });

  it("should be able to edit a question", async () => {
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
      title: "any-title",
      content: "any-content",
    });

    expect(questionsRepository.questions[0]).toMatchObject({
      title: "any-title",
      content: "any-content",
    });
  });

  it("should throw if authorId from question doesnt match with same authorId in request", () => {
    const newQuestion = makeQuestion({}, new Id("id-1"));

    questionsRepository.create(newQuestion);

    expect(async () => {
      await sut.execute({
        questionId: "id-1",
        authorId: "author-id-1",
        title: "any-title",
        content: "any-content",
      });
    }).rejects.toThrow();
  });

  it("should throw error if question doesnt exists", () => {
    expect(async () => {
      await sut.execute({
        questionId: "id-1",
        authorId: "author-id-1",
        title: "any-title",
        content: "any-content",
      });
    }).rejects.toThrow();
  });

  it("should throw an error if the content was not provided", () => {
    expect(async () => {
      await sut.execute({
        questionId: "id-1",
        authorId: "author-id-1",
        title: "any-title",
        content: "",
      });
    }).rejects.toThrow();
  });

  it("should throw an error if the content was not provided", () => {
    expect(async () => {
      await sut.execute({
        questionId: "id-1",
        authorId: "author-id-1",
        title: "",
        content: "any-content",
      });
    }).rejects.toThrow();
  });
});
