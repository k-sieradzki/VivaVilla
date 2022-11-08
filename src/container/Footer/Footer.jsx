import React from 'react'

import { SmallBtn } from '../../components'
import {AiOutlineSend} from 'react-icons/ai'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { GiFalconMoon} from 'react-icons/gi';

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topFooter}>
            <div className={styles.item}>
              <div className={styles.box}>
                  <h3>Contect</h3>
                  <div className={styles.contactBox}>
                    <p><a href="tel:+48881010251"><span>T: </span> +48 881 010 251</a></p>
                    <p><a href="mailto:support@website.com"><span>M: </span> support@vivavilla.com</a></p>
                    <p className={styles.address}><a href="https://www.google.com/maps/place/Burakowska+16B,+01-066+Warszawa/@52.256486,20.9780395,17z" target="_blank"> <span>A: </span> ul. burakowska 16b/82, <br />    Warszawa 01-066</a></p>

                    <SmallBtn btnTitle={'get directions'}/>
                  </div>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.box}>
                  <h3>Our Services</h3>
                    <div className={styles.servicesBox}>
                      <p><a href="#0">Architecture & Interior</a></p>
                      <p><a href="#0">Project Planning</a></p>
                      <p><a href="#0">Product Design</a></p>
                      <p><a href="#0">Custom Solutions</a></p>
                    </div>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.box}>
                  <h3>Usefull Links</h3>
                    <div className={styles.linksBox}>
                      <p><a href="#0">Facebook</a></p>
                      <p><a href="#0">Instagram</a></p>
                      <p><a href="#0">Twitter</a></p>
                      <p><a href="#0">Linkedin</a></p>
                      <p><a href="#0">FAQ</a></p>
                      <p><a href="#0">Privacy Policy</a></p>
                    </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.box}>
                  <h3>subscribe</h3>
                    <div className={styles.subscribeBox}>
                      <p>We will send you updates on new products and discounts.</p>
                      <form>
                        <input type="text" placeholder='Your Email'/>
                        <button type="button"><AiOutlineSend /></button>
                      </form>
                    </div>

                  <h3>follow us</h3>
                  <div className={styles.links}>
                    <a href="#0"><FaFacebookF/></a>
                    <a href="#0"><FaTwitter/></a>
                    <a href="#0"><FaInstagram/></a>
                    <a href="#0"><FaLinkedinIn/></a>
                  </div>
              </div>
            </div>


        </div>
        <div className={styles.botFooter}>
           <p>© 2022 VivaVilla. All rights reserved.</p>
           <p className={`${styles.hidenow} ${styles.falcon}` }><GiFalconMoon/></p>
           <p className={styles.hidenow}>Designed by VivaVilla</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer