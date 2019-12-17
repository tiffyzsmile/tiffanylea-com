import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from 'components/Page';
import Projects from 'Projects';
import Project from 'Project';
import Employers from 'Employers';
import Employer from 'Employer';
import Clients from 'Clients';
import Client from 'Client';
import Tags from 'Tags';
import Tag from 'Tag';
import TaggedProjects from 'TaggedProjects';
import './styles.scss';

const Admin = () => {
  return (
    <Page isAdmin title="Admin" description="Admin Area">
      <Switch>
        <Route path="/admin/projects" component={Projects} />
        <Route path="/admin/project/:id?" component={Project} />
        <Route path="/admin/employers" component={Employers} />
        <Route path="/admin/employer/:id?" component={Employer} />
        <Route path="/admin/clients" component={Clients} />
        <Route path="/admin/client/:id?" component={Client} />
        <Route path="/admin/tags" component={Tags} />
        <Route path="/admin/tag/:id?" component={Tag} />
        <Route path="/admin/taggedprojects/:id?" component={TaggedProjects} />
      </Switch>
    </Page>
  );
};

export default Admin;
