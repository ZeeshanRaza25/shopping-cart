import React from 'react'
import Product from './Product'

export default function Home() {
    return (
        <div >
            <div className="text-center mt-5">
                <h1>Store</h1>
                <p>This is the Store Page.</p>
                <Product />
            </div>
        </div>
    )
}
