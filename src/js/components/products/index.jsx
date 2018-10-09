import React from 'react'
import styles from './styles.scss'
import ProductsTable from './table'

function ProductsPage() {
  return (
    <main className={styles['products-container']}>
      <ProductsTable />
    </main>
  )
}
export default ProductsPage
