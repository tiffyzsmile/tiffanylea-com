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
      date
      description
      features
      url
      images
      display
      logo
      internal
      employer {
        id
        name
        startdate
        enddate
        url
        logo
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
          }
          tags {
            nextToken
          }
        }
      }
      tags {
        items {
          id
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
          }
          tag {
            id
            name
            category
            logo
          }
        }
        nextToken
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
    date
    description
    features
    url
    images
    display
    logo
    internal
    employer {
      id
      name
      startdate
      enddate
      url
      logo
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
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
        employer {
          id
          name
          startdate
          enddate
          url
          logo
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
          }
        }
        tags {
          items {
            id
          }
          nextToken
        }
      }
    }
    tags {
      items {
        id
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
          logo
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
      enddate
      url
      logo
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
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
export const getEmployer = `query GetEmployer($id: ID!) {
  getEmployer(id: $id) {
    id
    name
    startdate
    enddate
    url
    logo
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
        employer {
          id
          name
          startdate
          enddate
          url
          logo
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
          }
        }
        tags {
          items {
            id
          }
          nextToken
        }
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
      description
      logo
      url
      feedback
      display
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
        employer {
          id
          name
          startdate
          enddate
          url
          logo
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
          }
        }
        tags {
          items {
            id
          }
          nextToken
        }
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
    description
    logo
    url
    feedback
    display
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
      employer {
        id
        name
        startdate
        enddate
        url
        logo
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
          }
          tags {
            nextToken
          }
        }
      }
      tags {
        items {
          id
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
          }
          tag {
            id
            name
            category
            logo
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listTags = `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      category
      logo
      projects {
        items {
          id
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
          }
          tag {
            id
            name
            category
            logo
          }
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTag = `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
    category
    logo
    projects {
      items {
        id
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
          logo
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
export const getTaggedProject = `query GetTaggedProject($id: ID!) {
  getTaggedProject(id: $id) {
    id
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
      employer {
        id
        name
        startdate
        enddate
        url
        logo
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
          employer {
            id
            name
            startdate
            enddate
            url
            logo
          }
          client {
            id
            name
            description
            logo
            url
            feedback
            display
          }
          tags {
            nextToken
          }
        }
      }
      tags {
        items {
          id
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
          }
          tag {
            id
            name
            category
            logo
          }
        }
        nextToken
      }
    }
    tag {
      id
      name
      category
      logo
      projects {
        items {
          id
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
          }
          tag {
            id
            name
            category
            logo
          }
        }
        nextToken
      }
    }
  }
}
`;
export const listTaggedProjects = `query ListTaggedProjects(
  $filter: ModelTaggedProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listTaggedProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
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
        employer {
          id
          name
          startdate
          enddate
          url
          logo
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
          }
        }
        tags {
          items {
            id
          }
          nextToken
        }
      }
      tag {
        id
        name
        category
        logo
        projects {
          items {
            id
          }
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
