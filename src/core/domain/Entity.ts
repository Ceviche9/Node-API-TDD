import crypto from "crypto"

export abstract class Entity<T> {
  // Pata que o id seja acessível apenas nessa classe
  // Ou nas classes que estendem.
  protected _id: string;
  public props: T;

  get id() {
    return this._id
  }

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID()
  }
}