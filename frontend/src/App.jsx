import { LibraryCafeList } from './components/LibraryCafeList'
import { CreateLibraryCafe } from './components/CreateLibraryCafe'
import { LibraryCafeFilter } from './components/LibraryCafeFilter'
import { LibraryCafeSorting } from './components/LibraryCafeSorting'

const libraryCafes = [
  {
    name: 'The Coffee Connection',
    location: 'Somewhere',
    owner: 'John Doe',
    description: 'A cozy coffee shop to read your favorite book',
  },
  {
    name: 'Cafe Java',
    owner: 'Jane Doe',
  },
]

export function App() {
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
