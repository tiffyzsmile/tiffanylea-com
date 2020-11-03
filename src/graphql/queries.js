/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listEmployers = /* GraphQL */ `
  query ListEmployers(
    $filter: ModelEmployerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmployer = /* GraphQL */ `
  query GetEmployer($id: ID!) {
    getEmployer(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const getTaggedProject = /* GraphQL */ `
  query GetTaggedProject($id: ID!) {
    getTaggedProject(id: $id) {
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
export const listTaggedProjects = /* GraphQL */ `
  query ListTaggedProjects(
    $filter: ModelTaggedProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaggedProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
