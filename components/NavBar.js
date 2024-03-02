/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import { BiSolidCart } from 'react-icons/bi';
import UserMenu from './UserMenu';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <div>
        <Link passHref href="/">
          <Navbar.Brand>Bangazon</Navbar.Brand>
        </Link>
      </div>
      <div className="right-nav">
        <Nav>
          <Link passHref href="/shop">
            <Nav.Link className="pt-[11px]">Shop</Nav.Link>
          </Link>
          <Link passHref href="/cart">
            <Nav.Link className="pt-[11px]"><BiSolidCart className="h-7 w-7" /></Nav.Link>
          </Link>
          <UserMenu />
        </Nav>
      </div>
    </Navbar>
  );
}
