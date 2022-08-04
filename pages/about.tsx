import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import MainLayout from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.jsx</code>
      </p>
    </MainLayout>
  )
}