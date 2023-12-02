import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
        intro="I get asked a lot about the things I use to write, film, or just generally stay productive. Here’s a big list of all of my favorite stuff."
      >

        <div className="space-y-20">
          {/* <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Apple Pro Display XDR (Standard Glass)">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts.
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection> */}
          {/* <ToolsSection title="Development tools">
            <Tool title="Sublime Text 4">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection> */}
          <ToolsSection title="Productivity">
            <Tool title="Typeshare" href="https://typeshare.co?via=garrett&offer=mo9rm">
              It&apos;s hard to overstate how excellent Typeshare is, it’s a great tool for writing blog posts, articles. It even has over 100+ templates to help you get started so you never have to stare at the dreaded blank page ever again.

              Sign up using the affilate link below to get a 30-day free trial and 50% off your first three months.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
