import { InMemoryStudentRepository } from "../../../tests/repositories/in-memory-students-repository"
import { CreateChallengeSubmission } from "./create-challenge-submission"
import { InMemoryChallengeRepository } from '../../../tests/repositories/in-memory-challenge-repositories';
import { Student } from '../../domain/entities/student';
import { Challenge } from "../../domain/entities/challenge";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentsRepository = new InMemoryStudentRepository()
    const challengeRepository = new InMemoryChallengeRepository()
    const sut = new CreateChallengeSubmission(
      studentsRepository,
       challengeRepository
    )

    const student = Student.create({
      name: "Tundê",
      email: "tunde@hotmail.com"
    })

    const challenge = Challenge.create({
      title: "Desafio-01",
      instructionsUrl: "https://www.google.com"
    })

    studentsRepository.items.push(student)
    challengeRepository.items.push(challenge)

    const response = await sut.execute({
      studentId: student.id,
      ChallengeId: challenge.id,
    })

    expect(response).toBeTruthy()
  })
})
