import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createLibraryCafe } from '../api/libraryCafe'
import { Box, Button, Fieldset, Input, Stack, Textarea } from '@chakra-ui/react'
import { toaster, Toaster } from '@/components/ui/toaster'
import { Field } from '@/components/ui/field'

export function CreateLibraryCafe() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [owner, setOwner] = useState('')
  const [description, setDescription] = useState('')

  const queryClient = useQueryClient()
  const createLibraryCafeMutation = useMutation({
    mutationFn: () => createLibraryCafe({ name, location, owner, description }),
    onSuccess: () => {
      queryClient.invalidateQueries('libraryCafes')
      toaster.create({
        title: 'LibraryCafe created',
        description: 'You have successfully created a LibraryCafe',
        type: 'success',
      })
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createLibraryCafeMutation.mutate()
  }

  return (
    <Box maxW='md' borderWidth='1px' borderRadius='md' p='5'>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend textStyle='lg'>
              Create a LibraryCafe!
            </Fieldset.Legend>
            <Fieldset.HelperText textStyle='sm'>
              Provide your LibraryCafe details down below
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <Field label='Name'>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Field>

            <Field label='Location'>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Field>

            <Field label='Owner'>
              <Input value={owner} onChange={(e) => setOwner(e.target.value)} />
            </Field>

            <Field label='Description'>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                resize='none'
              />
            </Field>
          </Fieldset.Content>

          <Button
            variant='surface'
            type='submit'
            loading={createLibraryCafeMutation.isPending}
            loadingText='Creating...'
          >
            Create
          </Button>
        </Fieldset.Root>
        <Toaster />
      </form>
    </Box>
  )
}
