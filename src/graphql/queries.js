/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGrade = /* GraphQL */ `
  query GetGrade($id: ID!) {
    getGrade(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGrades = /* GraphQL */ `
  query ListGrades(
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMajors = /* GraphQL */ `
  query GetMajors($id: ID!) {
    getMajors(id: $id) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMajors = /* GraphQL */ `
  query ListMajors(
    $filter: ModelMajorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMajors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClasses = /* GraphQL */ `
  query GetClasses($id: ID!) {
    getClasses(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Class
        teacherID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudentClasses = /* GraphQL */ `
  query GetStudentClasses($id: ID!) {
    getStudentClasses(id: $id) {
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
export const listStudentClasses = /* GraphQL */ `
  query ListStudentClasses(
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        classesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const classesByTeacherID = /* GraphQL */ `
  query ClassesByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classesByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Class
        teacherID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentClassesByStudentId = /* GraphQL */ `
  query StudentClassesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentClassesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        classesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentClassesByClassesId = /* GraphQL */ `
  query StudentClassesByClassesId(
    $classesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentClassesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentClassesByClassesId(
      classesId: $classesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        classesId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
