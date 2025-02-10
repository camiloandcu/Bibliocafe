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
    onSuccess: () => queryClient.invalidateQueries('libraryCafes'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createLibraryCafeMutation.mutate()
    toaster.create({
      title: 'LibraryCafe created',
      description: 'You have successfully created a LibraryCafe',
    })
  }

  return (
    <Box maxW='md' borderWidth='1px' borderRadius='xl' p='4'>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend >Create a LibraryCafe</Fieldset.Legend>
            <Fieldset.HelperText>
              Provide the LibraryCafe details below
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

          <Button type='submit' isLoading={createLibraryCafeMutation.isLoading}>
            Create
          </Button>
        </Fieldset.Root>
        <Toaster />
      </form>
    </Box>
  )
}
