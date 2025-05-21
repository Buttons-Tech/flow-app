import React from 'react'
import NavBar from '../components/ui/NavBar'
import SearchBar from '../components/ui/SearchBar'
import Hero from '../components/ui/Hero'
import Categories from '../components/ui/Categories'

const Home = () => {
  return (
    <>
      <div>
        <h1>HOME</h1>
        <NavBar />
        <SearchBar />
        {/* logo */}
        <Hero />
        <Categories />
        {/* cards */}
        {/* footer */}
      </div>
    </>
  )
}

export default Home
