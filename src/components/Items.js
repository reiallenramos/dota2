import React, { Fragment } from 'react';
import { PageHeader } from 'react-bootstrap';

class Items  extends React.Component {
  render() {
    return (
      <Fragment>
        <PageHeader>
          Items<small>lorem ipsum</small>
        </PageHeader>
      </Fragment>
    )
  }
}

export default Items;
