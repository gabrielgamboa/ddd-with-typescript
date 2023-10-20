import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { Id } from "../../core/value-objects/id";

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
}