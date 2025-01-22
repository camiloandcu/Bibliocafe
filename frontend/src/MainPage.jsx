import { LibraryCafeList } from './components/LibraryCafeList'
import { CreateLibraryCafe } from './components/CreateLibraryCafe'
import { LibraryCafeFilter } from './components/LibraryCafeFilter'
import { LibraryCafeSorting } from './components/LibraryCafeSorting'
import { getLibraryCafes } from './api/libraryCafe'
import { useQuery } from '@tanstack/react-query'

export function MainPage() {
  const libraryCafesQuery = useQuery({
    queryKey: ['libraryCafes'],
    queryFn: () => getLibraryCafes(),
  })

  const libraryCafes = libraryCafesQuery.data ?? []

  console.log(libraryCafes)

  return (
    <div>
      <CreateLibraryCafe />
      <br />
      <div>
        <div style={{ display: 'flex' }}>
          <h4>Filter by:</h4>
          <LibraryCafeFilter field='location' />
        </div>
        <br />
        <LibraryCafeSorting fields={['createdAt', 'updatedAt']} />
      </div>
      <br />
      <LibraryCafeList libraryCafes={libraryCafes} />
    </div>
  )
}
