import Navbar from "../navbar/navbar";
import type {ReactNode} from 'react';

export default function Layout({ children }: { children: ReactNode}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
