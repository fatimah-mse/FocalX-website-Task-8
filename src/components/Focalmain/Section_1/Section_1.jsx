import { Card, Col, Row } from 'react-bootstrap'
import './Section_1.css'

export default function Section_1() {
  return (
    <>
      <section className="sec-1 px-4 py-lg-5">
        <h1 className="text-center fw-bold mb-2">Our Services</h1>
        <Row className='d-flex justify-content-evenly'>
          <Col lg='6' md='10' sm='12' className='my-4 position-relative'>
            <img src="./imgs/brandingpattren.png" className='position-absolute top-0 img-fluid' />
            <Card className='sec-1-card mt-5 p-4 shadow border-0 position-relative'>
              <h2 className='branding pb-1 pe-4'>Branding</h2>
              <strong>The brand is hope,</strong>
              <p>It is also the source of inspiration for everything you do when you
                deal with your customers and that is the important and emotional
                thing. <strong>Your Brand and Visual identity</strong> represents an intrinsic Value
                to your company.
              </p>
              <strong className='my-2'>In focal X agency, we provide:</strong>
              <p className='text-black-50 mb-0'>Visual identity design.</p>
              <p className='text-black-50 mb-0'>Define Brand Identity.</p>
              <p className='text-black-50 mb-0'>Define Brand personality.</p>
              <p className='text-black-50 mb-0'>Building Your brand strategy.</p>
              <p className='text-black-50 mb-0'>Market research and competitors study.</p>
              <strong className='my-2'>We walk with you from A to Z.</strong>
              <img src="./imgs/brandingOrange.png" className='card-image m-auto' />
            </Card>
          </Col>
          <Col lg='6' md='10' sm='12' className='my-4 position-relative'>
            <img src="./imgs/markrtingpattren.png" className='position-absolute top-0 img-fluid' />
            <Card className='sec-1-card mt-5 p-4 shadow border-0 position-relative'>
              <h2 className='markrting pb-1 pe-4'>Marketing</h2>
              <p>Talk to your customers and tell them <strong>you and your company's</strong> story through us the way you want.
              </p>
              <p className='mb-0'>Let us plan the content that will bring your audience closer to you.</p>
              <strong className='my-3'>In our marketing agency, we provide:</strong>
              <p className='text-black-50 mb-0'>E-mail marketing.</p>
              <p className='text-black-50 mb-0'>Affiliate marketing.</p>
              <p className='text-black-50 mb-0'>Market research and Analysis.</p>
              <p className='text-black-50 mb-0'>App store optimization ( ASO ).</p>
              <p className='text-black-50 mb-0'>Search engine Marketing ( SEM ).</p>
              <p className='text-black-50 mb-0'>Search engine optimization ( SEO ).</p>
              <p className='text-black-50 mb-0'>Social media marketing & campaigns.</p>
              <img src="./imgs/markiting.png" className='card-image m-auto' />
            </Card>
          </Col>
          <Col lg='6' md='10' sm='12' className='my-4 position-relative'>
            <img src="./imgs/Developmentpattren.png" className='position-absolute top-0 img-fluid' />
            <Card className='sec-1-card mt-5 p-4 shadow border-0 position-relative'>
              <h2 className='Web pb-1 pe-4'>Web/App Development</h2>
              <p><strong>website or app</strong> is the same as <strong>your digital company</strong> built from graphics and software.
              </p>
              <strong className='my-3'>In focal X agency, we provide:</strong>
              <p className='text-black-50 mb-0'>Case Study.</p>
              <p className='text-black-50 mb-0'>UX research.</p>
              <p className='text-black-50 mb-0'>Hosting Services.</p>
              <p className='text-black-50 mb-0'>App Development.</p>
              <p className='text-black-50 mb-0'>Web development.</p>
              <p className='text-black-50 mb-0'>Research & Prototyping.</p>
              <p className='text-black-50 mb-0'>consumer behavior study.</p>
              <p className='text-black-50 mb-0'>Conversion Rate Optimization.</p>
              <img src="./imgs/Development.png" className='card-image m-auto' />
            </Card>
          </Col>
          <Col lg='6' md='10' sm='12' className='my-4 position-relative'>
            <img src="./imgs/b2bpattren.png" className='position-absolute top-0 img-fluid' />
            <Card className='sec-1-card mt-5 p-4 shadow border-0 position-relative'>
              <h2 className='B2B pb-1 pe-4'>B2B & Partnerships</h2>
              <p>We believe that a successful business requires <strong>successful partners and successful partnerships,</strong> Based on our belief in work and
                <strong>sustainable development goal</strong> No. 17,
              </p>
              <strong className='my-3'>whether you:</strong>
              <p className='text-black-50 mb-0'>Huge company.</p>
              <p className='text-black-50 mb-0'>Start-up company.</p>
              <p className='text-black-50 mb-0'>Creative design agency.</p>
              <p className='text-black-50 mb-0'>Digital marketing agency.</p>
              <p className='text-black-50 mb-0'>You have small or large</p>
              <p className='text-black-50 mb-0'>company.</p>
              <strong className='mt-3'>We are here to empower you,</strong>
              <strong>you are welcome to join</strong>
              <strong className='mb-3'>our Partner Program.</strong>
              <img src="./imgs/b2b.png" className='card-image m-auto' />
            </Card>
          </Col>
        </Row>

      </section>

    </>
  )
}
