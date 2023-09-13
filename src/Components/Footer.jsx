import React from 'react'

const Footer = () => {
    return (
        <footer>
            <button
                className='backToTop'
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}
            >BACK TO TOP
            </button>


            <div className='socialMedia'>
                <img src='../../public/images/ico-facebook.png' alt='facebook' />
                <img src="../../public/images/ico-instagram.png" alt="instagram" />
                <img src="../../public/images/ico-tiktok.png" alt="Tik Tok" />
                <img src="../../public/images/ico-whatsapp.png" alt="Whatsapp" />
            </div>
            <div className='poweredBy'>
                <p>Powered by</p>
                <img src="../../public/images/DH.png" alt='DH-logo' />
            </div>


        </footer>
    )
}

export default Footer
