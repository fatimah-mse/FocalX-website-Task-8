import { Card, Col, Container, Row } from 'react-bootstrap'
import './Section_2.css'

export default function Section_2() {
    const Pricing = [
        {
          title: "basic",
          desc: "for very small businesses and freelancers.",
          disk: "500 M.B",
          bandwidth: "500 G.B",
          subDomains: "Unlimited",
          parked: "Unlimited",
          mail: "Unlimited",
          cpanel: "Yes",
          money: "14 Days",
          box: "You will have 1 Gift"
        },
        {
          title: "Pro",
          desc: "for Individuals that need sharing vlogs or need huge portfolio.",
          disk: "3000 M.B",
          bandwidth: "3 TERA",
          subDomains: "Unlimited",
          parked: "Unlimited",
          mail: "Unlimited",
          cpanel: "Yes",
          money: "14 Days",
          box: "1 Gift per/mo for year"
        },
        {
          title: "Business",
          desc: "for Team that need sharing and reporting.",
          disk: "5000 M.B",
          bandwidth: "5 TERA",
          subDomains: "Unlimited",
          parked: "Unlimited",
          mail: "Unlimited",
          cpanel: "Yes",
          money: "14 Days",
          box: "3 Gifts per/mo for year"
        },
        {
          title: "Enterprise",
          desc: "for large companies that need admins & security.",
          disk: "10000  M.B",
          bandwidth: "10 TERA",
          subDomains: "Unlimited",
          parked: "Unlimited",
          mail: "Unlimited",
          cpanel: "Yes",
          money: "14 Days",
          box: "Just Call Us"
        }
      ]

    return (
        <section className="sec-2 px-4 py-5">
        <h1 className="text-center fw-bold mb-3 text-white">Hosting Pricing</h1>
        <Row>
            {Pricing.map((Price , index) => {
            return (
                <Col lg='3' md='6' sm='12' className='my-4' key={index}>
                    <Card className='sec-2-card shadow border-0'>
                        <div className={`card-head card-head-${Price.title} w-100`}></div>
                        <div className='p-4'>
                            <h4 className='text-capitalize'>{Price.title}</h4>
                            <p className='mb-4'>{Price.desc}</p>
                            <p className='mb-0'>Disk Space: <strong>{Price.disk}</strong></p>
                            <p className='mb-0'>Bandwidth: <strong>{Price.bandwidth}</strong></p>
                            <p className='mb-0'>SubDomains: <strong>{Price.subDomains}</strong></p>
                            <p className='mb-0'>Parked Domains: <strong>{Price.parked}</strong></p>
                            <p className='mb-0'>E-mail Accounts: <strong>{Price.mail}</strong></p>
                            <p className='mb-0'>Cpanel (control panel): <strong>{Price.cpanel}</strong></p>
                            <p className='mb-0'>Money Back Guarantee: <strong>{Price.money}</strong></p>
                            <p className={`sec-2-card-footer sec-2-card-footer-${Price.title} fw-bold w-100 m-0 mt-4 px-4 py-2 rounded text-center`}>{Price.box}</p>
                        </div>
                    </Card>
                </Col>
            ) 
            })}
        </Row>
        <Container className='mt-4'>
            <p className='text-white text-center'>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
                <p className='text-white text-center my-1'>Go Online, choose your plan and Contact us on: </p>
                <a className='text-decoration-none text-white mx-4 my-1' href="mailto: contact@focal-x.com">contact@focal-x.com</a> 
                <span className='text-white'>|</span> 
                <a className='text-decoration-none text-white mx-4 my-1' href="tel:+963 935 033 139">+963 935 033 139</a>
            </div>
        </Container>
        </section>
    )
}
