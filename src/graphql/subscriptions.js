/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateEmployer = /* GraphQL */ `
  subscription OnCreateEmployer {
    onCreateEmployer {
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateEmployer = /* GraphQL */ `
  subscription OnUpdateEmployer {
    onUpdateEmployer {
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteEmployer = /* GraphQL */ `
  subscription OnDeleteEmployer {
    onDeleteEmployer {
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
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          tags {
            items {
              id
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
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
              __typename
            }
            __typename
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateTaggedProject = /* GraphQL */ `
  subscription OnCreateTaggedProject {
    onCreateTaggedProject {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateTaggedProject = /* GraphQL */ `
  subscription OnUpdateTaggedProject {
    onUpdateTaggedProject {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteTaggedProject = /* GraphQL */ `
  subscription OnDeleteTaggedProject {
    onDeleteTaggedProject {
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
              __typename
            }
            nextToken
            __typename
          }
          __typename
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
              __typename
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
              __typename
            }
            tags {
              nextToken
              __typename
            }
            __typename
          }
          __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
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
              __typename
            }
            tag {
              id
              name
              category
              display
              logo
              createdAt
              updatedAt
              __typename
            }
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
