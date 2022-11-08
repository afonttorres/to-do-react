import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ priority }) => {
    return (
        <div>{priority}</div>
    )
}

Badge.propTypes = {
    priority: PropTypes.string,
}

export default Badge