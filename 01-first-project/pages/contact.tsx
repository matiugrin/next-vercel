
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

// functional component
export default function ContactPage() {
  return (

    <MainLayout>
        <h1>Contact Page</h1>

        <h1 className={'title'}>
        {/* Ir a <a href="/about">About</a> */}
        {/* Link tiene un prefetch in the background habilitado siempre, se puede deshabilitar. prefetch={false} */}
        Ir a <Link href="/" replace>Home</Link>
        </h1>

        <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.jsx</code>
        </p>
    </MainLayout>

  )
}
