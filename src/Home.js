import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/AcqBAU/1500x600-PrimeFreetrial._CB658316842_.jpg" alt=""/>
            </div>
            <div className="home__row">
                <Product
                title = 'Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
                price = {27999.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SL1500_.jpg"
                rating = {4}/>
                <Product
                title = "pTron Bassbuds in-Ear True Wireless Bluetooth 5.0 Headphones with Hi-Fi Deep Bass, 20Hrs Playtime with Case, Ergonomic Sweatproof Earbuds, Noise Isolation,..."
                price = {899}
                image = "https://images-na.ssl-images-amazon.com/images/I/61HSxuSHiKL._SL1100_.jpg"
                rating = {5}/>
            </div>
            <div className="home__row">
                <Product title="
Echo (4th Gen, White) Combo with Wipro 9W Smart LED color bulb"
                 price={7048.00}
                 image='https://images-na.ssl-images-amazon.com/images/I/61jkF9x5qRL._SL1000_.jpg'
                 rating={4}
                 />
                <Product
                title = "Bourge Men's Loire-z63 Running Shoes "
                price = {675.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/81oe93mJ2nL._UL1500_.jpg"
                rating = {3}/>
                <Product
                title = "Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life"
                price = {2499.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                rating = {5}/>
            </div>
            <div className="home__row">
                <Product
                title = "Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black) | With Data Saver"
                price = {24999.00}
                image = "https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg"
                rating = {4}/>
            </div>
        </div>
    )
}

export default Home
