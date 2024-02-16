/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGrade = /* GraphQL */ `
  mutation CreateGrade(
    $input: CreateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    createGrade(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGrade = /* GraphQL */ `
  mutation UpdateGrade(
    $input: UpdateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    updateGrade(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGrade = /* GraphQL */ `
  mutation DeleteGrade(
    $input: DeleteGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    deleteGrade(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMajors = /* GraphQL */ `
  mutation CreateMajors(
    $input: CreateMajorsInput!
    $condition: ModelMajorsConditionInput
  ) {
    createMajors(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMajors = /* GraphQL */ `
  mutation UpdateMajors(
    $input: UpdateMajorsInput!
    $condition: ModelMajorsConditionInput
  ) {
    updateMajors(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMajors = /* GraphQL */ `
  mutation DeleteMajors(
    $input: DeleteMajorsInput!
    $condition: ModelMajorsConditionInput
  ) {
    deleteMajors(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      Classes {
        nextToken
        __typename
      }
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClasses = /* GraphQL */ `
  mutation CreateClasses(
    $input: CreateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    createClasses(input: $input, condition: $condition) {
      id
      Class
      students {
        nextToken
        __typename
      }
      teacherID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClasses = /* GraphQL */ `
  mutation UpdateClasses(
    $input: UpdateClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    updateClasses(input: $input, condition: $condition) {
      id
      Class
      students {
        nextToken
        __typename
      }
      teacherID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClasses = /* GraphQL */ `
  mutation DeleteClasses(
    $input: DeleteClassesInput!
    $condition: ModelClassesConditionInput
  ) {
    deleteClasses(input: $input, condition: $condition) {
      id
      Class
      students {
        nextToken
        __typename
      }
      teacherID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudentClasses = /* GraphQL */ `
  mutation CreateStudentClasses(
    $input: CreateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    createStudentClasses(input: $input, condition: $condition) {
      id
      studentId
      classesId
      student {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      classes {
        id
        Class
        teacherID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudentClasses = /* GraphQL */ `
  mutation UpdateStudentClasses(
    $input: UpdateStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    updateStudentClasses(input: $input, condition: $condition) {
      id
      studentId
      classesId
      student {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      classes {
        id
        Class
        teacherID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudentClasses = /* GraphQL */ `
  mutation DeleteStudentClasses(
    $input: DeleteStudentClassesInput!
    $condition: ModelStudentClassesConditionInput
  ) {
    deleteStudentClasses(input: $input, condition: $condition) {
      id
      studentId
      classesId
      student {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      classes {
        id
        Class
        teacherID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
