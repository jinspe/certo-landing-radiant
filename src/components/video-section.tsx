import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export function VideoSection() {
  return (
    <div className="mt-2 bg-white pt-32">
      <Container>
        <Subheading>Overview</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Example compliance workflow
        </Heading>
        <div className="mt-10 sm:mt-16 md:p-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-900/10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/tfsiinGsoaU"
                title="Certo Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
