/* Components */
import { Providers } from '@/lib/providers'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className='bg-blue font-poppins'>
          <h3
            className="text-white text-xl text-center font-medium mt-40 md:text-3xl md:font-semibold"
          >
            Token Validator
          </h3>
          <hr className="w-36 md:w-56 h-1 mx-auto my-5 bg-green border-0 rounded" />
          <section className={styles.container}>
            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  )
}
