import * as React from 'react';
import MenuNavbarMobile from './MenuNavbarMobile';
import MenuNavbarDesktop from './MenuNavbarDesktop';

export default function MenuNavbar() {
  return (
    <>
      <MenuNavbarDesktop />

      <MenuNavbarMobile />
    </>
  );
}
