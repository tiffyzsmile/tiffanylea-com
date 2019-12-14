import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Page from 'components/Page';
import Projects from 'Projects';
import Project from 'Project';
import Employers from 'Employers';
import Employer from 'Employer';
import Clients from 'Clients';
import Client from 'Client';
import Tags from 'Tags';
import './styles.scss';

const Admin = () => {
  const { page, id } = useParams();
  console.log('page', page);
  console.log('id', id);
  return (
    <Page isAdmin title="Admin" description="Admin Area">
      <Switch>
        <Route path="/admin/projects" component={Projects} />
        <Route path="/admin/project/:id?" component={Project} />
        <Route path="/admin/employers" component={Employers} />
        <Route path="/admin/employer/:id" component={Employer} />
        <Route path="/admin/clients" component={Clients} />
        <Route path="/admin/client/:id" component={Client} />
        <Route path="/admin/tags/:id?" component={Tags} />
      </Switch>
    </Page>
  );
};

export default Admin;
