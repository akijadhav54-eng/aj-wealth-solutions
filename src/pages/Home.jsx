// HOME PAGE — assembles every homepage section in order.
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesPreview from '../components/ServicesPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import ProcessTimeline from '../components/ProcessTimeline'
import SIPCalculator from '../components/SIPCalculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BlogPlaceholder from '../components/BlogPlaceholder'

export default function Home() {
  return (
    <>
      <SEO
        title="AJ Wealth Solutions | Mutual Fund Distributor & SIP Planning in Pune"
        description="AMFI Registered Mutual Fund Distributor in Pune. SIP planning, goal-based investing, retirement & tax-saving solutions. Turning dreams into disciplined investments."
        path="/"
      />
      <Hero />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <SIPCalculator />
      <Testimonials />
      <FAQ />
      <BlogPlaceholder />
    </>
  )
}
