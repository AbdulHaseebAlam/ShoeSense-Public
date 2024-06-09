import React from 'react'
import Header from '../components/header'
import ProductsSection from '../components/productssection';
import styles from '../styles/women.module.css'
import Footer from '../components/Footer';

function women() {
  return (
    <div>
      <Header />
      <div className={styles.heading}>
      <h1>Women's Shoes</h1>
      </div>
      <ProductsSection gender={"women"} />
      <Footer />

    </div>
  )
}

export default women