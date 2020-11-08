import React from 'react'
import PropTypes from 'prop-types'

export default function Movie({ id, year, title, summary, background_image }) {
  return <h4>{title}</h4>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired
}
