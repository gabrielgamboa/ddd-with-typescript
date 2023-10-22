import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { Question } from "../../domain/entities/question";
import { Id } from "@/core/value-objects/id";
import { Slug } from "../../domain/entities/value-objects/slug";
import { makeQuestion } from "test/factories/make-question";

let questionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get question by slug", () => {
  beforeEach(() => {
    questionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(questionsRepository);
  });

  it("should be able get question by slug", async () => {
    questionsRepository.create(
      makeQuestion({
        slug: new Slug("any-title"),
      }),
    );

    const question = await sut.execute({
      slug: "any-title",
    });

    console.log(question);

    expect(question.id).toBeTruthy();
  });

  it("should throws if question doesnt exists", async () => {
    expect(async () => {
      await sut.execute({
        slug: "any-title",
      });
    }).rejects.toThrow();
  });
});
