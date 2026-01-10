import React from 'react'
import styles from './Screen_11.module.css'

const Screen_11 = () => {
    return (
        <>
            {/* Terms and Conditions Section */}
            <div className={styles.termsSection}>
                <br /><br /><br />
                <p className={styles.termsText}>
                    1. Offer available to new subscribers who purchase an eligible device. $9.99/month after trial. Only one offer per Apple Account and only one offer per family if you're part of a Family Sharing group, regardless of the number of devices you or your family purchase. This offer is not available if you or your family have previously subscribed to Apple Fitness+. Offer good for three months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
                    <br /><br />
                    Apple Fitness+ requires a subscription and compatible hardware and software. See here for compatibility details.
                    <br /><br />
                    To get the newest features, make sure your devices are running the latest software version.
                    <br /><br />
                    2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple's trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                    <br /><br />
                    To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                    <br /><br />
                    Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
                    <br /><br />
                    If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
                    <br /><br />
                    Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
                    <br /><br />
                    A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
                    <br /><br />
                    Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
                </p>
                <hr className={styles.divider} />
            </div>

            {/* Footer Links */}
            <footer className={styles.footer}>
                <div className={styles.footerColumn}>
                    <h3>Shop and Learn</h3>
                    <ul>
                        <li>Store</li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>Vision</li>
                        <li>AirPods</li>
                        <li>TV & Home</li>
                        <li>AirTag</li>
                        <li>Accessories</li>
                        <li>Gift Cards</li>
                    </ul>
                    <h3>Apple Wallet</h3>
                    <ul>
                        <li>Wallet</li>
                        <li>Apple Card</li>
                        <li>Apple Pay</li>
                        <li>Apple Cash</li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Account</h3>
                    <ul>
                        <li>Manage Your Apple Account</li>
                        <li>Apple Store Account</li>
                        <li>iCloud.com</li>
                    </ul>
                    <h3>Entertainment</h3>
                    <ul>
                        <li>Apple One</li>
                        <li>Apple TV+</li>
                        <li>Apple Music</li>
                        <li>Apple Arcade</li>
                        <li>Apple Fitness+</li>
                        <li>Apple News+</li>
                        <li>Apple Podcasts</li>
                        <li>Apple Books</li>
                        <li>App Store</li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Apple Store</h3>
                    <ul>
                        <li>Find a Store</li>
                        <li>Genius Bar</li>
                        <li>Today at Apple</li>
                        <li>Group Reservations</li>
                        <li>Apple Camp</li>
                        <li>Apple Store App</li>
                        <li>Certified Refurbished</li>
                        <li>Apple Trade In</li>
                        <li>Financing</li>
                        <li>Carrier Deals at Apple</li>
                        <li>Order Status</li>
                        <li>Shopping Help</li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>For Business</h3>
                    <ul>
                        <li>Apple and Business</li>
                        <li>Shop for Business</li>
                    </ul>
                    <h3>For Education</h3>
                    <ul>
                        <li>Apple and Education</li>
                        <li>Shop for K-12</li>
                        <li>Shop for College</li>
                    </ul>
                    <h3>For Healthcare</h3>
                    <ul>
                        <li>Apple and Healthcare</li>
                    </ul>
                    <h3>For Government</h3>
                    <ul>
                        <li>Apple and Government</li>
                        <li>Shop for Veterans and Military</li>
                        <li>Shop for State and Local Employees</li>
                        <li>Shop for Federal Employees</li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Apple Values</h3>
                    <ul>
                        <li>Accessibility</li>
                        <li>Education</li>
                        <li>Environment</li>
                        <li>Inclusion and Diversity</li>
                        <li>Privacy</li>
                        <li>Racial Equity and Justice</li>
                        <li>Supply Chain Innovation</li>
                    </ul>
                    <h3>About Apple</h3>
                    <ul>
                        <li>Newsroom</li>
                        <li>Apple Leadership</li>
                        <li>Career Opportunities</li>
                        <li>Investors</li>
                        <li>Ethics & Compliance</li>
                        <li>Events</li>
                        <li>Contact Apple</li>
                    </ul>
                </div>
            </footer>

            {/* Bottom Footer */}
            <div className={styles.bottomFooter}>
                <p className={styles.contactInfo}>
                    More ways to shop: <span className={styles.link}>Find an Apple Store</span> or <span className={styles.link}>other retailer</span> near you. Or call <span className={styles.link}>1-800-MY-APPLE</span>.
                </p>
                <hr />
                <div className={styles.legal}>
                    <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
                    <span className={styles.legalLinks}>
                        Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
                    </span>
                </div>
            </div>
        </>
    )
}

export default Screen_11