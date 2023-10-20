import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/types/optional";
import { Id } from "../../core/value-objects/id";

interface InstructorProps {
    name: string;
}

export class Instructor extends Entity<InstructorProps> {
    static create(props: InstructorProps, id?: Id) {
        const instructor = new Instructor(props, id)
        return instructor;
    }
}