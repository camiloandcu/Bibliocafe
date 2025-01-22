import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { LibraryCafe } from './LibraryCafe'

export function LibraryCafeList({ libraryCafes = [] }) {
  return (
    <div>
      {libraryCafes.map((libraryCafe) => (
        <Fragment key={libraryCafe._id}>
          <LibraryCafe {...libraryCafe} />
          <hr />
        </Fragment>
      ))}
    </div>
  )
}

LibraryCafeList.propTypes = {
  libraryCafes: PropTypes.arrayOf(PropTypes.shape(LibraryCafe.propTypes))
    .isRequired,
}
