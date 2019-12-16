/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    description
    features
    url
    images
    employer {
      id
      name
      startdate
      projects {
        items {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
      projects {
        id
        name
        description
        features
        url
        images
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
            features
            url
            images
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
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    description
    features
    url
    images
    employer {
      id
      name
      startdate
      projects {
        items {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
      projects {
        id
        name
        description
        features
        url
        images
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
            features
            url
            images
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
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    description
    features
    url
    images
    employer {
      id
      name
      startdate
      projects {
        items {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
      projects {
        id
        name
        description
        features
        url
        images
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
            features
            url
            images
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
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
        features
        url
        images
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
            features
            url
            images
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
        features
        url
        images
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
            features
            url
            images
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
        features
        url
        images
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
            features
            url
            images
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
export const onCreateClient = `subscription OnCreateClient {
  onCreateClient {
    id
    name
    projects {
      id
      name
      description
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
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
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
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
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
  }
}
`;
export const onCreateTag = `subscription OnCreateTag {
  onCreateTag {
    id
    name
    category
    projects {
      items {
        id
        project {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
export const onUpdateTag = `subscription OnUpdateTag {
  onUpdateTag {
    id
    name
    category
    projects {
      items {
        id
        project {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
export const onDeleteTag = `subscription OnDeleteTag {
  onDeleteTag {
    id
    name
    category
    projects {
      items {
        id
        project {
          id
          name
          description
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
          }
          tags {
            nextToken
          }
        }
        tag {
          id
          name
          category
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
export const onCreateTaggedProject = `subscription OnCreateTaggedProject {
  onCreateTaggedProject {
    id
    project {
      id
      name
      description
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
    tag {
      id
      name
      category
      projects {
        items {
          id
          project {
            id
            name
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
  }
}
`;
export const onUpdateTaggedProject = `subscription OnUpdateTaggedProject {
  onUpdateTaggedProject {
    id
    project {
      id
      name
      description
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
    tag {
      id
      name
      category
      projects {
        items {
          id
          project {
            id
            name
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
  }
}
`;
export const onDeleteTaggedProject = `subscription OnDeleteTaggedProject {
  onDeleteTaggedProject {
    id
    project {
      id
      name
      description
      features
      url
      images
      employer {
        id
        name
        startdate
        projects {
          items {
            id
            name
            description
            features
            url
            images
          }
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
          features
          url
          images
          employer {
            id
            name
            startdate
          }
          client {
            id
            name
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
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
    tag {
      id
      name
      category
      projects {
        items {
          id
          project {
            id
            name
            description
            features
            url
            images
          }
          tag {
            id
            name
            category
          }
        }
        nextToken
      }
    }
  }
}
`;
