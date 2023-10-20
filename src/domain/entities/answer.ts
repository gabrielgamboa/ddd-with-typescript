import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";
import { Id } from "../../core/value-objects/id";

interface AnswerProps {
    authorId: Id
    questionId: Id;
    content: string;
    createdAt: Date
    updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
    get content() {
        return this.props.content;
    }

}