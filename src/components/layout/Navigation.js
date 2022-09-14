import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProtectedComponent from '../ProtectedComponent'

export default function Navigation() {
  return (
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/classes'>Classes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <ProtectedComponent requiresRole='teacher' noAcceessElement={<div>no access to secret</div>}>
          <Nav.Link as={Link} to='/secret'>This link is only visible to teachers</Nav.Link>
        </ProtectedComponent>
      </Nav.Item>
    </Nav>
  )
}
