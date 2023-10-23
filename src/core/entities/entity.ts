import { Id } from "../value-objects/id";

export abstract class Entity<Props> {
  private _id: Id;
  protected props: Props;

  constructor(props: Props, id?: Id) {
    this.props = props;
    this._id = id ?? new Id(id);
  }

  get id() {
    return this._id;
  }
}
