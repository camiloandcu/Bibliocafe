export function CreateLibraryCafe() {
  return (
    <form
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '20px auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h1 style={{ color: '#333' }}>Create a Library Cafe</h1>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='name'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='location'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Location
        </label>
        <input
          type='text'
          id='location'
          name='location'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='owner'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Owner
        </label>
        <input
          type='text'
          id='owner'
          name='owner'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='description'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          rows='4'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        ></textarea>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='menu'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Menu Items (Comma-separated)
        </label>
        <input
          type='text'
          id='menu'
          name='menu'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          htmlFor='books'
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Books (Comma-separated)
        </label>
        <input
          type='text'
          id='books'
          name='books'
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      <button
        type='submit'
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Create
      </button>
    </form>
  )
}
