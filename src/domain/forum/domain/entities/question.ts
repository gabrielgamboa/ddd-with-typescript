import { Entity } from "@/core/entities/entity";
import { Slug } from "./value-objects/slug";
import dayjs from "dayjs";
import { Id } from "@/core/value-objects/id";
import { Optional } from "@/core/types/optional";

interface QuestionProps {
  title: string;
  content: string;
  bestAnswerId?: Id;
  slug: Slug;
  authorId: Id;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  get slug() {
    return this.props.slug;
  }

  get authorId() {
    return this.props.authorId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, "days") <= 3;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  changeBestAnswerId(bestAnswerId: Id | undefined) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }

  changeContent(content: string) {
    if (!content) throw new Error("content not provided");
    this.props.content = content;
    this.touch();
  }

  changeTitle(title: string) {
    if (!title) throw new Error("title not provided");
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);
    this.touch();
  }

  static create(props: Optional<QuestionProps, "createdAt" | "slug">, id?: Id) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    );
    return question;
  }
}
