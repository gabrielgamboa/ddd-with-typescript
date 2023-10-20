import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";
import { Id } from "../../core/value-objects/id";

interface StudentProps {
    name: string;
}

export class Student extends Entity<StudentProps> {
    get name() {
        return this.props.name;
    }

    static create(props: StudentProps, id?: Id) {
        const student = new Student(props, id)
        return student;
    }
}