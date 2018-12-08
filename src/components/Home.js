import React, { Fragment } from 'react';
import { PageHeader } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <PageHeader>
          Home<small>lorem ipsum</small>
        </PageHeader>
      </Fragment>
    )
  }
}

export default Home;
