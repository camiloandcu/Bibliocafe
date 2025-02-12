import { Button, Card, Text } from "@chakra-ui/react"

export function LibraryCafeCard({ name, description, owner }) {
  return (
    <Card.Root size="lg" h="full" w="full">
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

