import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createLibraryCafe } from '../api/libraryCafe'

export function CreateLibraryCafe() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [owner, setOwner] = useState('')
  const [description, setDescription] = useState('')
  
  const queryClient = useQueryClient()
  const createLibraryCafeMutation = useMutation({
    mutationFn: () => createLibraryCafe({ name, location, owner, description }),
    onSuccess: () => queryClient.invalidateQueries('libraryCafes'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createLibraryCafeMutation.mutate()
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <input
        type='submit'
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        value={createLibraryCafeMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!name || !owner || createLibraryCafeMutation.isPending}
      />
      {createLibraryCafeMutation.isSuccess ? (
        <>
          <br />
          <small style={{ color: 'green' }}>
            Library Cafe created successfully!
          </small>
        </>
      ) : null}
    </form>
  )
}
