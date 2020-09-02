/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          nextToken
        }
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          nextToken
        }
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      date
      description
      features
      url
      images
      display
      logo
      internal
      createdAt
      updatedAt
      employer {
        id
        name
        startdate
        enddate
        url
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          nextToken
        }
      }
      client {
        id
        name
        description
        logo
        url
        feedback
        display
        createdAt
        updatedAt
        projects {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      tags {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createEmployer = /* GraphQL */ `
  mutation CreateEmployer(
    $input: CreateEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    createEmployer(input: $input, condition: $condition) {
      id
      name
      startdate
      enddate
      url
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const updateEmployer = /* GraphQL */ `
  mutation UpdateEmployer(
    $input: UpdateEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    updateEmployer(input: $input, condition: $condition) {
      id
      name
      startdate
      enddate
      url
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteEmployer = /* GraphQL */ `
  mutation DeleteEmployer(
    $input: DeleteEmployerInput!
    $condition: ModelEmployerConditionInput
  ) {
    deleteEmployer(input: $input, condition: $condition) {
      id
      name
      startdate
      enddate
      url
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          name
          date
          description
          features
          url
          images
          display
          logo
          internal
          createdAt
          updatedAt
          employer {
            id
            name
            startdate
            enddate
            url
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
            createdAt
            updatedAt
            projects {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
          }
          tags {
            items {
              id
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      description
      logo
      url
      feedback
      display
      createdAt
      updatedAt
      projects {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      description
      logo
      url
      feedback
      display
      createdAt
      updatedAt
      projects {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      description
      logo
      url
      feedback
      display
      createdAt
      updatedAt
      projects {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      category
      display
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      category
      display
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      category
      display
      logo
      createdAt
      updatedAt
      projects {
        items {
          id
          createdAt
          updatedAt
          project {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
          tag {
            id
            name
            category
            display
            logo
            createdAt
            updatedAt
            projects {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createTaggedProject = /* GraphQL */ `
  mutation CreateTaggedProject(
    $input: CreateTaggedProjectInput!
    $condition: ModelTaggedProjectConditionInput
  ) {
    createTaggedProject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      project {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      tag {
        id
        name
        category
        display
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateTaggedProject = /* GraphQL */ `
  mutation UpdateTaggedProject(
    $input: UpdateTaggedProjectInput!
    $condition: ModelTaggedProjectConditionInput
  ) {
    updateTaggedProject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      project {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      tag {
        id
        name
        category
        display
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteTaggedProject = /* GraphQL */ `
  mutation DeleteTaggedProject(
    $input: DeleteTaggedProjectInput!
    $condition: ModelTaggedProjectConditionInput
  ) {
    deleteTaggedProject(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      project {
        id
        name
        date
        description
        features
        url
        images
        display
        logo
        internal
        createdAt
        updatedAt
        employer {
          id
          name
          startdate
          enddate
          url
          logo
          createdAt
          updatedAt
          projects {
            items {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        client {
          id
          name
          description
          logo
          url
          feedback
          display
          createdAt
          updatedAt
          projects {
            id
            name
            date
            description
            features
            url
            images
            display
            logo
            internal
            createdAt
            updatedAt
            employer {
              id
              name
              startdate
              enddate
              url
              logo
              createdAt
              updatedAt
            }
            client {
              id
              name
              description
              logo
              url
              feedback
              display
              createdAt
              updatedAt
            }
            tags {
              nextToken
            }
          }
        }
        tags {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      tag {
        id
        name
        category
        display
        logo
        createdAt
        updatedAt
        projects {
          items {
            id
            createdAt
            updatedAt
            project {
              id
              name
              date
              description
              features
              url
              images
              display
              logo
              internal
              createdAt
              updatedAt
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
