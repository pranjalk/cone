import { connect } from 'react-redux';
import {
  consoleLogWholeData
} from '../actions/index.js';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    consoleLogWholeData: (payload) => {
      dispatch(consoleLogWholeData(payload));
    }
  };
};

const MainConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default MainConnect;
