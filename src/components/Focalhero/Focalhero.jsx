import './Focalhero.css'
import { Row , Col } from 'react-bootstrap';

export default function Hero () {
    return (
        <>
        <section className="focal-hero position-relative w-100 d-flex align-items-lg-center justify-content-center">
            <Row className='w-100 d-flex align-items-lg-center'>
                <Col lg='6' md='12' className='p-0'>
                    <div className='hero-text px-4'>
                        <h3 className='title fw-bold'>Hey !! Mario still here, But don’t forget that</h3>
                        <p className='fs-md-5 mt-4'>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                            Branding, Digital Marketing, Web/App Development, Ui/Ux 
                            Content creation, Graphic design, Social media and More........ 
                            So you can take a tour in our website, OR just <strong>Press Start :)</strong>
                        </p>
                    </div>
                </Col>
                <Col lg='6' md='12' className='gameBoy position-relative d-flex justify-content-end px-4'>
                    <img className='img-fluid position-absolute end-0 h-100' src="./imgs/pattren.png" />
                    <img className='gameBoy-img img-fluid' src="./imgs/gameBoy-min.png" />
                    <img className='pressStart img-fluid position-absolute' src="./imgs/pressStart.svg" />
                    <a href="http://focal-x.com/mario" target='_blank' className='start fw-bold text-uppercase position-absolute text-decoration-none'>start</a>       
                </Col>
                <Col lg='12' className='p-0'>
                    <div className='hero-footer position-absolute d-flex flex-column flex-md-row justify-content-between align-items-md-center w-100'>
                        <div className='social-links mb-1 mb-md-3'>
                            <a className='me-2 text-decoration-none' href="http://www.facebook.com/focal.x.agency/" target="_blank"><img src="http://focal-x.com/assets/img/icons/facebook.png" /></a> 
                            <a className='me-2 text-decoration-none' href="http://www.behance.net/focal.x.agency/" target="_blank"><img src="http://focal-x.com/assets/img/icons/behance.png" /></a> 
                            <a className='me-2 text-decoration-none' href="https://www.linkedin.com/company/focal-x-agency" target="_blank"><img src="http://focal-x.com/assets/img/icons/linkedin.png" /></a> 
                            <a className='me-2 text-decoration-none' href="https://www.Instagram.com/focal.x.agency" target="_blank"><img src="http://focal-x.com/assets/img/icons/instgram.png" /></a> 
                            <a className='me-2 text-decoration-none' href="https://twitter.com/focal_x_agency" target="_blank"><img src="http://focal-x.com/assets/img/icons/twitter.png" /></a> 
                        </div>
                        <a href="#"></a>
                        <p className='copyright text-white'>© 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                </Col>
            </Row>
            <img className='hero-footer-lg-img position-absolute img-fluid' src="./imgs/footer.svg" />
            <img className='hero-footer-sm-img position-absolute img-fluid w-100' src="./imgs/footer-mobile.png" />
            
        </section>
        </>
    )
    
}