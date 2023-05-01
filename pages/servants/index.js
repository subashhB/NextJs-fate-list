import Head from "next/head";
import React from "react";
import styles from "../../styles/Servants.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.atlasacademy.io/export/NA/nice_servant.json"
  );
  const json = await res.json();
  const data = json.slice(0,10)
  return {
    props: { servants: data },
  };
};

const Servants = ({ servants }) => {
  return (
    <>
      <Head>
        <title>FGO List | Servants</title>
        <meta name="keywords" content="fatego" />
      </Head>
      <div>
        <h1>All Servants</h1>
        {servants.map((servant) => (
          <Link key={servant.id}  className={styles.single} href={`/servants/${servant.id}`}>
            <h3>{servant.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Servants;
