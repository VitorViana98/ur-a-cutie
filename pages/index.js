import Head from "next/head";
import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";
import axios from "axios";
import Preloader from "../components/Preloader";
import LinkGrid from "../components/links/LinkGrid";
import Cats from "../components/Cats";

export default function Home() {
  const [compliment, setCompliment] = useState("");

  useEffect(() => {
    axios.get("/api/compliment").then((res) => {
      setCompliment(res.data.compliment);
    });
  }, []);

  if (compliment.length === 0) {
    return <Preloader />;
  }

  return (
    <div>
      <Head>
        <title>Te amo gatinha!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Te amo gatinha 😻</h1>

        <p className="description">Espero que tenha um dia maravilhoso!</p>

        <code style={{ margin: "0 0.5rem" }}>
          Nunca se esqueça: {compliment}
        </code>

        <LinkGrid />
        <Cats />
      </main>
      <style jsx>{`
        code:hover,
        code:active,
        code:focus {
          color: #f687b3;
          border-color: #f687b3;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .compliment {
          cursor: pointer;
          margin: 0 0.5rem;
        }

        .toggle-container {
          padding-bottom: 25px;
        }

        main {
          padding: 2.5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }
      `}</style>
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
