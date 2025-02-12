import {
  createListCollection,
  Grid,
  GridItem,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
} from '@chakra-ui/react'
import { SelectRoot } from '@/components/ui/select'

export function LibraryCafeSorting({
  value,
  onChange,
  orderValue,
  onOrderChange,
}) {
  return (
    <Grid maxW='sm' templateColumns='repeat(3,1fr)' gap='2'>
      <GridItem colSpan={2}>
        <SelectRoot
          defaultValue={[value]}
          onValueChange={({ value }) => onChange(value)}
          collection={sortingCollection}
        >
          <SelectLabel>Sort by:</SelectLabel>
          <SelectTrigger>
            <SelectValueText />
          </SelectTrigger>
          <SelectContent>
            {sortingCollection.items.map((field) => (
              <SelectItem item={field} key={field.value}>
                {field.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </GridItem>

      <GridItem colSpan={1}>
        <SelectRoot
          defaultValue={[orderValue]}
          onValueChange={({ value }) => onOrderChange(value)}
          collection={orderCollection}
        >
          <SelectLabel>Order:</SelectLabel>
          <SelectTrigger>
            <SelectValueText />
          </SelectTrigger>
          <SelectContent>
            {orderCollection.items.map((order) => (
              <SelectItem item={order} key={order.value}>
                {order.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </GridItem>
    </Grid>
  )
}

const sortingCollection = createListCollection({
  items: [
    { label: 'Newest', value: 'createdAt' },
    { label: 'Last updated', value: 'updatedAt' },
  ],
})

const orderCollection = createListCollection({
  items: [
    { label: 'Ascending', value: 'ascending' },
    { label: 'Descending', value: 'descending' },
  ],
})
