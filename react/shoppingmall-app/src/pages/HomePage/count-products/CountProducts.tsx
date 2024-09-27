import React from 'react'
import { useAppSelector } from '@/hooks/redux'
import styles from '@/styles/home/count-products/counts-products.module.scss';

const CountProducts = () => {
    const { products, isLoading } = useAppSelector(state => state.products);

    return (
        <div className={styles.count_products}>
            {!isLoading && (
                <p>
                    Showing: {products.length} items
                </p>
            )}
        </div>
    )
}

export default CountProducts