import React, { Fragment } from 'react';
import { PageHeader } from 'react-bootstrap';

class Heroes extends React.Component {
  render() {
    return (
      <Fragment>
        <PageHeader>
          Heroes<small>lorem ipsum</small>
        </PageHeader>
      </Fragment>
    )
  }
}

export default Heroes;
