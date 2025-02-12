import { LibraryCafeCard } from './LibraryCafeCard'
import { Grid, GridItem } from '@chakra-ui/react'

export function LibraryCafeList({ libraryCafes = [] }) {
  return (
    <Grid templateColumns='repeat(3, 1fr)' templateRows="repeat(10,1fr)" gap="3">
      {libraryCafes.map((libraryCafe) => (
        <GridItem key={libraryCafe._id} colSpan={1} rowSpan={2}>
          <LibraryCafeCard {...libraryCafe} />
        </GridItem>
      ))}
    </Grid>
  )
}

