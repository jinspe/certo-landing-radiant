import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Certo: Making compliance a competitive advantage. We build AI Compliance Agents that turn ever-changing regulations into instant, auditable checks.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">
        Certo: Making compliance a competitive advantage.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our mission: At Certo we&apos;re on a simple mission: shrink the time,
        cost and risk of getting products to market. We build AI Compliance
        Agents that turn ever-changing regulations, supplier documents and
        formula rules into instant, auditable checks, so brands can launch
        faster, safer, and with confidence.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">What we do</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            From raw material acceptability to marketing claims and dossier
            handoffs, Certo codifies regulatory know-how into agents that run
            continuously against your portfolio. We surface issues earlier,
            automate supplier follow-ups, and generate audit-ready documentation
            , converting regulatory work into a competitive asset reducing time
            to market.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            FMCG innovation is slowed by fragmented, manual compliance. Certo
            unlocks product velocity, reduces risk exposure, and creates a
            defensible, data-driven compliance layer that competitors can&apos;t
            easily replicate.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Our promise</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <p className="mt-6 text-sm/6 text-gray-600">
            Transparent, auditable AI + human-in-the-loop review where it
            matters. We partner with your regulatory teams and trusted
            third-party certifiers to deliver defensible, enterprise-grade
            results.
          </p>
          <p className="mt-6 text-sm/6 text-gray-600">
            Every compliance check comes with complete audit trails, legal
            citations, and step-by-step reasoning. Our AI agents surface issues
            early, but your regulatory experts maintain full control over final
            determinations. We provide the evidence and analysis, you make the
            decisions.
          </p>
          <p className="mt-6 text-sm/6 text-gray-600">
            Our platform generates regulator-grade reports with exact source
            page references, so quality and regulatory teams can verify findings
            without back-and-forth. When regulations change, we automatically
            recheck impacted products and alert your team to required actions.
          </p>
        </div>
      </section>
    </Container>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Built by people who know both the art and the pain of compliance.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Bastien had spent years at Roland Berger advising FMCG biggest players
        in the world on strategy, he saw firsthand how regulatory increasing
        complexity slowed down billion-dollar launches.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Jean, an engineer specialized in AI and automation, built
            data-driven products used for over 1,000 businesses, he knew what
            was technically possible if the right data and logic could be
            codified.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Together, they created Certo: a platform where every regulatory rule
            becomes a programmable agent. What started as a late-night idea
            between a consultant and an engineer now powers AI compliance
            workflows for global brands from Paris to Tokyo.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            They&apos;ve since surrounded themselves with experts in regulatory
            affairs, data science, and enterprise software, people who believe
            compliance should be as scalable as cloud infrastructure.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="mailto:hello@certo.ai">
              Contact us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Backed by leading investors.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are grateful to have the support of experienced investors.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Our investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="EF"
            src="/investors/Entrepreneurs_First_Logo.png"
            className="h-16 rounded-xl"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            EF has been a driving force in the tech industry, backing bold
            entrepreneurs who explore innovative solutions in compliance and
            regulatory technology. Their deep industry expertise and extensive
            network provide their portfolio companies with strategic guidance
            and market access.
          </p>
        </li>
        <li>
          <img
            alt="Transpose"
            src="/investors/transpose.png"
            className="h-14 invert"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Transpose has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of supporting
            transformative solutions has helped produce some of the world&apos;s
            most innovative companies.
          </p>
        </li>
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['“']">
            Certo has reduced our compliance time by 80% and eliminated
            regulatory delays.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <div className="mt-32" />
      <Footer />
    </main>
  )
}
