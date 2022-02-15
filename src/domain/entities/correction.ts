import { Entity } from "../../core/domain/Entity";

type CorrectionsProps = {
  grade: number
  submissionId: string;
  createdAt: Date
}

export class Correction extends Entity<CorrectionsProps> {

  private constructor(props: CorrectionsProps, id?: string) {
    super(props, id);
  }

  static create(props: CorrectionsProps, id?: string) {
    // if(props.grade < 0 || props.grade > 10) {
    //   throw new Error("")
    // }

    const correction = new Correction(props, id);
    return correction;
  }

}