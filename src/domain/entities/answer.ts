import { randomUUID } from 'node:crypto'
import { Entity } from '../../core/entities/entity'
import { Id } from '../../core/value-objects/id'
import { Optional } from '../../core/types/optional'

interface AnswerProps {
  authorId: Id
  questionId: Id
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  get questionId() {
    return this.props.questionId
  }

  get authorId() {
    return this.props.authorId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
  }

  static create(props: Optional<AnswerProps, 'createdAt'>, id?: Id) {
    const question = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )
    return question
  }
}
