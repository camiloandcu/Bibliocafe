import { Button, Card, Text } from "@chakra-ui/react"
import PropTypes from 'prop-types'

export function LibraryCafe({ name, location, description, owner }) {
  return (
    <Card.Root size='sm'>
      <Card.Body gap="2">
        <Card.Title mt="2">{name}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Text textStyle="sm" fontWeight="medium" letterSpacing="tight" mt="2">
          By {owner}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button variante="surface">Visit</Button>
      </Card.Footer>
    </Card.Root>
  )
}

LibraryCafe.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
}
