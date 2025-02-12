import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { GiCoffeeCup } from 'react-icons/gi'
import { Tooltip } from '@/components/ui/tooltip'
import { IoMdAdd } from 'react-icons/io'
import { ColorModeButton } from './ui/color-mode'

function LibraryCafeIcon() {
  return (
    <>
      <Icon fontSize='xl'>
        <GiCoffeeCup />
      </Icon>
      <Text fontSize='xl' fontWeight='semibold'>
        Bibliocafe
      </Text>
    </>
  )
}

function CreateLibraryCafeButton() {
    return (
        <Tooltip content='Create a LibraryCafe! ☕'>
            <IconButton aria-label='Create a LibraryCafe' variant='outline' size='md'>
                <IoMdAdd />
            </IconButton>
        </Tooltip>
    )
}

export default function Navbar() {
  return (
    <Box as='nav' p='4' alignItems='center'>
      <Flex justifyContent='space-between'>

        <HStack alignItems='center' gap='5'>
          <Link href='/'>
            <LibraryCafeIcon />
          </Link>
          <Link href='/about'>
            <Text fontSize='xl' fontWeight='normal'>
              About
            </Text>
          </Link>
        </HStack>

        <HStack>
          <CreateLibraryCafeButton />
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  )
}
