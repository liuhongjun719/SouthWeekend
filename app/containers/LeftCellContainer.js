
import React from 'react';
import { connect } from 'react-redux';
import LeftCellPage from '../pages/LeftCellPage';


class LeftCellContainer extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <LeftCellPage {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const { leftCellPage } = state;
  return {
    leftCellPage
  };
}

export default connect(mapStateToProps)(LeftCellContainer);
