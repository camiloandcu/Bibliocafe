import { LibraryCafeList } from '@/components/LibraryCafeList'
import { CreateLibraryCafe } from '@/components/CreateLibraryCafe'
import { LibraryCafeFilter } from '@/components/LibraryCafeFilter'
import { LibraryCafeSorting } from '@/components/LibraryCafeSorting'
import { getLibraryCafes } from '@/api/libraryCafe'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Container } from '@chakra-ui/react'

export function MainPage() {
  const [owner, setOwner] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const libraryCafesQuery = useQuery({
    queryKey: ['libraryCafes', { owner, sortBy, sortOrder }],
    queryFn: () => getLibraryCafes({ owner, sortBy, sortOrder }),
  })

  const libraryCafes = libraryCafesQuery.data ?? []

  return (
    <Container>
      <CreateLibraryCafe />
      <br />
      <div>
        <div style={{ display: 'flex' }}>
          <h4>Filter by:</h4>
          <LibraryCafeFilter
            field='owner'
            value={owner}
            onChange={(value) => setOwner(value)}
          />
        </div>
        <br />
        <LibraryCafeSorting
          fields={['createdAt', 'updatedAt']}
          value={sortBy}
          onChange={(value) => setSortBy(value)}
          orderValue={sortOrder}
          onOrderChange={(orderValue) => setSortOrder(orderValue)}
        />
      </div>
      <br />
      <LibraryCafeList libraryCafes={libraryCafes} />
    </Container>
  )
}
