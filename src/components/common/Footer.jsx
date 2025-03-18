import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div className="ft-left">
                <div className="ft-pt">
                    <p className='more'>KNOW MORE</p>
                    <div className='ft-link'>
                        <p className='underline'>Our Approach</p>
                        <p className='underline'>Investment Philosophy</p>
                        <p className='underline'>Social Co-operate  <br />
                            Responsibility</p>
                    </div>
                </div>
                <div className="ft-pt">
                    <div className='ft-link'>
                        <p className='underline'>Privacy Policy</p>
                        <p className='underline'>Terms & Conditions</p>
                        <p className='underline'>Modern Slavery Policy</p>
                        <p className='underline'>Disclaimer</p>
                    </div>
                </div>
            </div>
            <div className="ft-right">
                <p>Important Information: Investors should be aware that with investing capital is at risk, past performance is not necessarily a guide to the future and that the price of shares and other investments, and the income derived from them, may fall as well as rise and the amount realised may be less than the original sum invested. Wealthfusion is authorised and regulated by the Financial Conduct Authority, Company number 12079392. Registered Address: 70 Baker Street London W1U 7DL.</p>
            </div>
        </div>
    )
}

export default Footer