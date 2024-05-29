import { Col, Row } from "react-bootstrap"
import "./Focalfooter.css"

export default function Focalfooter() {
  return (
    <>
        <footer className="px-4 py-3 border-top">
            <Row>
                <Col lg='4' md='6' sm='12' className="my-3">
                    <div>
                        <div>
                            <img className="agency-img img-fluid" src="./imgs/Footerlogo.png" />
                            <span className="text-white agency ms-1">.agency</span>
                        </div>
                        <div className="w-50">
                            <h4 className="text-white mt-4 mb-1 fw-light">Head Office</h4>
                            <a href="https://maps.app.goo.gl/Qwp6NNGQ9Q3P79DaA" className="text-white text-decoration-none fw-light">Syria - Latakia - grh2+hjx 35.5199518</a>
                        </div>
                        <p className="text-white mt-4">© 2021 - 2023 focal X L.L.C All Right Reserved</p>
                    </div>
                </Col>
                <Col lg='8' md='6' sm='12' className="my-3">
                    <Row className="border-bottom pb-2">
                        <Col lg='3' md='6' sm='12' className="my-3">
                            <h5 className="mb-3 text-white">Sales</h5>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="tel:+963 953 666 056">contact@focal-x.com +963 953 666 056</a>
                            <h5 className="mt-4 text-white">Public Relations</h5>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="tel:+963 953 666 052">pr@focal-x.com +963 953 666 052</a>
                        </Col>
                        <Col lg='3' md='6' sm='12' className="my-3">
                            <h5 className="mb-3 text-white">Customer Support</h5>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="tel:+963 953 666 054">info@focal-x.com +963 953 666 054</a>
                            <h5 className="mt-4 text-white">Human Resources</h5>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="mailto: hr@focal-x.com">hr@focal-x.com</a>
                        </Col>
                        <Col lg='3' md='6' sm='12' className="my-3"> 
                            <h5 className="mb-3 text-white">Useful Links</h5>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="#">Clients & Partners</a>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="#">Check Certificat ID</a>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="#">Check for employee</a>
                            <a className='text-decoration-none text-white mb-3 fw-light' href="#">Our Brand ID guidlines</a>
                        </Col>
                        <Col lg='3' md='6' sm='12' className="my-3">
                            <h5 className="mb-3 text-white">Keep In Touch</h5>
                            <div className='mb-1 mb-md-3'>
                                <a className='me-2 text-decoration-none' href="http://www.facebook.com/focal.x.agency/" target="_blank"><img src="http://focal-x.com/assets/img/iconFotter/facebook.png" /></a> 
                                <a className='me-2 text-decoration-none' href="http://www.behance.net/focal.x.agency/" target="_blank"><img src="http://focal-x.com/assets/img/iconFotter/behance.png" /></a> 
                                <a className='me-2 text-decoration-none' href="https://www.linkedin.com/company/focal-x-agency" target="_blank"><img src="http://focal-x.com/assets/img/iconFotter/linkdin.png" /></a> 
                                <a className='me-2 text-decoration-none' href="https://www.Instagram.com/focal.x.agency" target="_blank"><img src="	http://focal-x.com/assets/img/iconFotter/instgram.png" /></a> 
                                <a className='me-2 text-decoration-none' href="https://twitter.com/focal_x_agency" target="_blank"><img src="http://focal-x.com/assets/img/iconFotter/twitter.png" /></a> 
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    </>
  )
}
