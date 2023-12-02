import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function Intro () {
  return (
    <>
      <p>I get asked a lot about the things I use to write, film, or just generally stay productive. Here’s a big list of all of my favorite stuff.</p>

      <p className="mt-4 text-sm italic text-gray-400">Small Disclaimer: Some of these are affiliate links and I will receive a small commission if you use them, at no cost to you.</p>
    </>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro={<Intro />}
      >

        <div className="space-y-20">
          <ToolsSection title="Productivity">
            <Tool title="Typeshare" href="https://typeshare.co?via=garrett&offer=mo9rm">
              <p className="mb-5">
                It&apos;s hard to overstate how excellent Typeshare is, it’s a great tool for writing blog posts, articles, and tweets. It even has over 100+ templates to help you get started so you never have to stare at the dreaded blank page ever again.
              </p>
              <p className="mb-5 font-bold">
                Sign up to get a 30-day free trial and 50% off your first three months.
              </p>
              <Button>Sign Up To Typeshare</Button>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
