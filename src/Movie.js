import React from 'react'
import PropTypes from 'prop-types'

export default function Movie({ year, title, summary, medium_cover_image }) {
  return (
    <div className="movie">
      <img src={medium_cover_image} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired
}