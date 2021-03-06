import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Apollo Playground</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <h1>
          Welcome to <a>Playground!</a>
        </h1>

        <p>Links</p>
        <ol>
          <li>
            <Link href="/image-upload">
              <a>ImageUpload</a>
            </Link>
          </li>
        </ol>

        <p>Learn more</p>
        <ol>
          <li>
            <a href="https://nextjs.org">Next.js</a>
          </li>
          <li>
            <a href="https://www.apollographql.com/docs/react/">
              Apollo Client (React)
            </a>
          </li>
        </ol>
      </main>
    </div>
  );
}
