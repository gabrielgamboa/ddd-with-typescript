import { DeleteAnswerUseCase } from "./delete-answer";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { Id } from "@/core/value-objects/id";
import { makeAnswer } from "test/factories/make-answer";

let answersRepository: InMemoryAnswersRepository;
let sut: DeleteAnswerUseCase;

describe("Delete Answer", () => {
  beforeEach(() => {
    answersRepository = new InMemoryAnswersRepository();
    sut = new DeleteAnswerUseCase(answersRepository);
  });

  it("should be able to delete a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new Id("author-id-1"),
      },
      new Id("id-1"),
    );
    answersRepository.create(newAnswer);

    await sut.execute({
      answerId: "id-1",
      authorId: "author-id-1",
    });

    expect(answersRepository.answers).toHaveLength(0);
  });

  it("should throw if authorId from question doesnt match with same authorId in request", async () => {
    const newAnswer = makeAnswer({}, new Id("id-1"));

    answersRepository.create(newAnswer);

    expect(async () => {
      await sut.execute({
        answerId: "id-1",
        authorId: "author-id-1",
      });
    }).rejects.toThrow();
  });
});
