import { useState, useEffect } from 'react'

function Detail(props) {
  const [title, setTitle] = useState(null)
  useEffect(() => {
    const { location, history } = props
    if (!location.state) {
      history.push('/')
    }
    setTitle(location.state.title)
  }, [])

  return title ? (<span>{title}</span>) : null
}

export default Detail