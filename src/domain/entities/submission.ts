import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  ChallengeId: string
  studentId: string
  createdAt?: Date
}

export class Submission extends Entity<SubmissionProps> {

  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps, id?: string) {
    const correction = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date()
    }, id);
    return correction;
  }

}