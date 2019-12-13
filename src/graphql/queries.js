/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      url
      employer {
        id
        name
        startdate
      }
      client {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    description
    url
    employer {
      id
      name
      startdate
      projects {
        nextToken
      }
    }
    client {
      id
      name
      projects {
        id
        name
        description
        url
      }
    }
  }
}
`;
export const listEmployers = `query ListEmployers(
  $filter: ModelEmployerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      startdate
      projects {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEmployer = `query GetEmployer($id: ID!) {
  getEmployer(id: $id) {
    id
    name
    startdate
    projects {
      items {
        id
        name
        description
        url
      }
      nextToken
    }
  }
}
`;
export const listClients = `query ListClients(
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      projects {
        id
        name
        description
        url
      }
    }
    nextToken
  }
}
`;
export const getClient = `query GetClient($id: ID!) {
  getClient(id: $id) {
    id
    name
    projects {
      id
      name
      description
      url
      employer {
        id
        name
        startdate
      }
      client {
        id
        name
      }
    }
  }
}
`;
