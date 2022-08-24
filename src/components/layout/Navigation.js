import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/classes'>Classes</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
