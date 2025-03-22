import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='footer-pt1'>
                <div className="ft-left">
                    <div className="ft-pt">
                        <p className='more'>CONTACT US</p>
                        <div className='ft-link'>
                            <p className='underline'>info@wealthfusion.co.uk</p>
                            <p className='underline'>+44 (0) 208 154 7030</p>
                            <p className='underline'>70 Baker Street, Marylebone,<br />
                                London W1U 7DL</p>
                        </div>
                    </div>
                    <div className="ft-pt">
                        <p className='more'>LEGAL</p>
                        <div className='ft-link'>
                            <Link href="/privacy-policy" className='underline'>Privacy Policy</Link>
                            <Link href="/terms" className='underline'>Terms & Conditions</Link>
                            <Link href="/modern-slavery-policy" className='underline'>Modern Slavery Linkolicy</Link>
                            <Link href="/disclaimer" className='underline'>Disclaimer</Link>
                        </div>
                    </div>
                </div>
                <div className="ft-right">
                    <p>Important Information: Investors should be aware that with investing capital is at risk, past performance is not necessarily a guide to the future and that the price of shares and other investments, and the income derived from them, may fall as well as rise and the amount realised may be less than the original sum invested. Wealthfusion is authorised and regulated by the Financial Conduct Authority, Company number 12079392. Registered Address: 70 Baker Street London W1U 7DL.</p>
                </div>
            </div>
            <p>© 2025 WealthFusion Private Wealth Management.</p>
        </div>
    )
}

export default Footer