import { Submission } from '../../domain/entities/submission';
import { ChallengesRepository } from '../repositories/ChallengesRepository';
import { StudentsRepository } from '../repositories/StudentsRepository';

type CreateChallengeSubmissionRequest = {
  studentId: string
  ChallengeId: string
}

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepository,
    private challengeRepository: ChallengesRepository
  ) {}

  async execute({studentId, ChallengeId}: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId)

    if(!student) {
      throw new Error("Student does not exists");
    }

    const challenge = await this.challengeRepository.findById(ChallengeId)

    if(!challenge) {
      throw new Error("Challenge does not exists");
    }

    const submission = Submission.create({
        studentId, 
        ChallengeId
    })

    return submission;
  }
}