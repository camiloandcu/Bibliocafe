import PropTypes from 'prop-types'

export function LibraryCafeFilter({ field }) {
  return (
    <div style={{ maxWidth: '300px' }}>
      <label
        htmlFor={field}
        style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
      >
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </label>
      <input
        type='text'
        id={field}
        name={field}
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  )
}

LibraryCafeFilter.propTypes = {
  field: PropTypes.string.isRequired,
}