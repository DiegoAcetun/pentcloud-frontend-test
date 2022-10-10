// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/moleculas/Layout'
import NavBar from '../components/moleculas/NavBar'
// import Button from '../components/atomos/Button'
import Main from '../components/moleculas/home/Main'
export default function Home() {
  return (
    <Layout>
      <NavBar paginaActual={"home"}/>
      <Main />
    </Layout>
  );
}
