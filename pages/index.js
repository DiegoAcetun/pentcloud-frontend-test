import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
export default function Home() {
  return (
    <Layout>
      <NavBar paginaActual={"home"}/>
      <div className='grid grid-cols-2 my-auto'>
        <div className="ml-10 md:ml-20">
          <p className="mt-20 text-3xl sm:text-5xl md:text-9xl text-white">Explore</p>
          <p className="mt-5 sm:text-2xl md:text-6xl text-white">THE WORLD</p>
        <p className="md:mt-10 mt-5 leading-8 mb-10 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore amet, ea odit aliquid placeat corporis vitae delectus! Dolorum nulla deserunt natus atque nostrum ad assumenda modi labore ex in!
        </p>
        <Button />
        </div>
      </div>
    </Layout>
  );
}
