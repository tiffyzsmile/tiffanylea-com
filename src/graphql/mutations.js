/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createEmployer = `mutation CreateEmployer($input: CreateEmployerInput!) {
  createEmployer(input: $input) {
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
export const updateEmployer = `mutation UpdateEmployer($input: UpdateEmployerInput!) {
  updateEmployer(input: $input) {
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
export const deleteEmployer = `mutation DeleteEmployer($input: DeleteEmployerInput!) {
  deleteEmployer(input: $input) {
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
export const createClient = `mutation CreateClient($input: CreateClientInput!) {
  createClient(input: $input) {
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
export const updateClient = `mutation UpdateClient($input: UpdateClientInput!) {
  updateClient(input: $input) {
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
export const deleteClient = `mutation DeleteClient($input: DeleteClientInput!) {
  deleteClient(input: $input) {
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
