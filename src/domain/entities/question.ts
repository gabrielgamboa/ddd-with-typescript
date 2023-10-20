import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { Id } from "../../core/value-objects/id";
import { Optional } from "../../core/types/optional";

interface QuestionProps {
    title: string
    content: string
    bestAnswerId: Id
    slug: Slug
    authorId: Id
    createdAt: Date
    updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
    static create(props: Optional<QuestionProps, 'createdAt'>, id?: Id) {
        const question = new Question({
            ...props,
            createdAt: new Date(),
        }, id)
        return question
    }
}
