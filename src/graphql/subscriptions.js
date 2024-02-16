/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGrade = /* GraphQL */ `
  subscription OnCreateGrade($filter: ModelSubscriptionGradeFilterInput) {
    onCreateGrade(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateGrade = /* GraphQL */ `
  subscription OnUpdateGrade($filter: ModelSubscriptionGradeFilterInput) {
    onUpdateGrade(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteGrade = /* GraphQL */ `
  subscription OnDeleteGrade($filter: ModelSubscriptionGradeFilterInput) {
    onDeleteGrade(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMajors = /* GraphQL */ `
  subscription OnCreateMajors($filter: ModelSubscriptionMajorsFilterInput) {
    onCreateMajors(filter: $filter) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMajors = /* GraphQL */ `
  subscription OnUpdateMajors($filter: ModelSubscriptionMajorsFilterInput) {
    onUpdateMajors(filter: $filter) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMajors = /* GraphQL */ `
  subscription OnDeleteMajors($filter: ModelSubscriptionMajorsFilterInput) {
    onDeleteMajors(filter: $filter) {
      id
      Name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateClasses = /* GraphQL */ `
  subscription OnCreateClasses($filter: ModelSubscriptionClassesFilterInput) {
    onCreateClasses(filter: $filter) {
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
export const onUpdateClasses = /* GraphQL */ `
  subscription OnUpdateClasses($filter: ModelSubscriptionClassesFilterInput) {
    onUpdateClasses(filter: $filter) {
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
export const onDeleteClasses = /* GraphQL */ `
  subscription OnDeleteClasses($filter: ModelSubscriptionClassesFilterInput) {
    onDeleteClasses(filter: $filter) {
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
export const onCreateStudentClasses = /* GraphQL */ `
  subscription OnCreateStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onCreateStudentClasses(filter: $filter) {
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
export const onUpdateStudentClasses = /* GraphQL */ `
  subscription OnUpdateStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onUpdateStudentClasses(filter: $filter) {
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
export const onDeleteStudentClasses = /* GraphQL */ `
  subscription OnDeleteStudentClasses(
    $filter: ModelSubscriptionStudentClassesFilterInput
  ) {
    onDeleteStudentClasses(filter: $filter) {
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
