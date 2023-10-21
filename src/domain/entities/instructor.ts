import { Id } from '@/core/value-objects/id'
import { Entity } from '../../core/entities/entity'
import { Optional } from '../../core/types/optional'

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  get name() {
    return this.props.name
  }

  static create(props: InstructorProps, id?: Id) {
    const instructor = new Instructor(props, id)
    return instructor
  }
}
