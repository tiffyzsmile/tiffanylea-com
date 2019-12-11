/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateEmployer = `subscription OnCreateEmployer {
  onCreateEmployer {
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
export const onUpdateEmployer = `subscription OnUpdateEmployer {
  onUpdateEmployer {
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
export const onDeleteEmployer = `subscription OnDeleteEmployer {
  onDeleteEmployer {
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
export const onCreateClient = `subscription OnCreateClient {
  onCreateClient {
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
export const onUpdateClient = `subscription OnUpdateClient {
  onUpdateClient {
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
export const onDeleteClient = `subscription OnDeleteClient {
  onDeleteClient {
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
