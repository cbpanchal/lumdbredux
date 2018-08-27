import React from 'react';
import { connect } from 'react-redux';
import { toggleMessage } from './actions';
import { bindActionCreators } from 'redux';

const Toggle = ({messageVisibility, toggleMessage}) => (
    <div>
        {messageVisibility &&
            <p>You will be seeing this if redux action is toggled</p>
        }
        <button onClick= { toggleMessage }>
            Toggle me
        </button>
    </div>
);

const mapStateToProps = (state) => ({
    messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
