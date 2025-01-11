import PropTypes from 'prop-types'

export function LibraryCafe({ name, location, description, owner }) {
  return (
    <article style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>{name}</h2>
      {location && <p><strong>Location:</strong> {location}</p>}
      <p><strong>Owner:</strong> {owner}</p>
      {description && <p><strong>Description:</strong> {description}</p>}
    </article>
  )
}

LibraryCafe.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
}
