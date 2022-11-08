import React from 'react'
import PropTypes from 'prop-types'

function Status({ status }) {
    return (
        <div className={status ? 'completed' : 'uncompleted'} />
    )
}

Status.propTypes = {
    status: PropTypes.bool,
}

export default Status