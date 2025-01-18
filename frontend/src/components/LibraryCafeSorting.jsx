import PropTypes from 'prop-types'

export function LibraryCafeSorting({ fields = [] }) {
  return (
    <div>
      <label
        htmlFor='sortBy'
        style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
      >
        Sort by
      </label>
      <select
        id='sortBy'
        name='sortBy'
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        {fields.map((field) => (
          <option key={field} value={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </option>
        ))}
      </select>
      <select name='sortOrder' id='sortOrder'>
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  )
}

LibraryCafeSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
}
