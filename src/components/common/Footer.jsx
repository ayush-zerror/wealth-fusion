import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className='footer-pt1'>
                <div className="ft-left">
                    <div className="ft-pt">
                        <p className='more'>Contact</p>
                        <div className='ft-link'>
                            <a target='_black' href='mailto:info@wealthfusion.co.uk' className='underline'>Email: info@wealthfusion.co.uk</a>
                            <a target='_black' href='tel:+442081547030' className='underline'>Phone: +44 (0) 208 154 7030</a>
                            <a target='_black' href='https://maps.app.goo.gl/xkC2zERs2ztvfT7GA' className='underline'>70 Baker Street, Marylebone,<br />
                                London W1U 7DL</a>
                        </div>
                    </div>
                    <div className="ft-pt">
                        <p className='more'>Legal</p>
                        <div className='ft-link'>
                            <Link href="/privacy-policy" className='underline'>Privacy Notice</Link>
                            <Link href="/terms" className='underline'>Terms & Conditions</Link>
                            <Link href="/modern-slavery-policy" className='underline'>Modern Day Slavery</Link>
                            <Link href="/mifidpru-notice" className='underline'>MiFIDPRU Notice</Link>
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