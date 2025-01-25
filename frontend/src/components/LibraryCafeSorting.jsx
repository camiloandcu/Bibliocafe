import PropTypes from 'prop-types'

export function LibraryCafeSorting({
  fields = [],
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <div style={{ maxWidth: '300px' }}>
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
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {fields.map((field) => (
          <option key={field} value={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </option>
        ))}
      </select>
      <select
        name='sortOrder'
        id='sortOrder'
        value={orderValue}
        onChange={(e) => onOrderChange(e.target.value)}
        style={{
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <option value={'ascending'}>ascending</option>
        <option value={'descending'}>descending</option>
      </select>
    </div>
  )
}

LibraryCafeSorting.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  orderValue: PropTypes.string.isRequired,
  onOrderChange: PropTypes.func.isRequired,
}
