/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject(
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
export const updateProject = `mutation UpdateProject(
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
export const deleteProject = `mutation DeleteProject(
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
export const createEmployer = `mutation CreateEmployer(
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
export const updateEmployer = `mutation UpdateEmployer(
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
export const deleteEmployer = `mutation DeleteEmployer(
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
export const createClient = `mutation CreateClient(
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
          }
        }
        nextToken
      }
    }
  }
}
`;
export const updateClient = `mutation UpdateClient(
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
          }
        }
        nextToken
      }
    }
  }
}
`;
export const deleteClient = `mutation DeleteClient(
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
          }
        }
        nextToken
      }
    }
  }
}
`;
export const createTag = `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    id
    name
    category
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
export const updateTag = `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    id
    name
    category
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
export const deleteTag = `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    id
    name
    category
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
export const createTaggedProject = `mutation CreateTaggedProject(
  $input: CreateTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  createTaggedProject(input: $input, condition: $condition) {
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
          }
        }
        nextToken
      }
    }
  }
}
`;
export const updateTaggedProject = `mutation UpdateTaggedProject(
  $input: UpdateTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  updateTaggedProject(input: $input, condition: $condition) {
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
          }
        }
        nextToken
      }
    }
  }
}
`;
export const deleteTaggedProject = `mutation DeleteTaggedProject(
  $input: DeleteTaggedProjectInput!
  $condition: ModelTaggedProjectConditionInput
) {
  deleteTaggedProject(input: $input, condition: $condition) {
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
          }
        }
        nextToken
      }
    }
  }
}
`;
