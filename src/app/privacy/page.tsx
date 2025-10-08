import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Logo } from '@/components/logo'
import { SITE } from '@/utils/constants'

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container className="relative">
          <div className="py-16">
            <div className="mb-8">
              <Logo className="h-8" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h1 className="mb-8 text-4xl font-bold text-gray-950">
                Privacy Policy
              </h1>

              <p className="mb-6 text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    1. Information We Collect
                  </h2>
                  <p className="mb-4 text-gray-700">
                    We collect information you provide directly to us, such as
                    when you create an account, use our services, or contact us
                    for support.
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                      Contact information (name, email address, phone number)
                    </li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4 text-gray-700">
                    We use the information we collect to:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>
                      Send technical notices, updates, and support messages
                    </li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    3. Information Sharing
                  </h2>
                  <p className="mb-4 text-gray-700">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy.
                  </p>
                  <p className="text-gray-700">
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-2 text-gray-700">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>
                      In connection with a business transfer or acquisition
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the internet is 100%
                    secure.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    5. Cookies and Tracking
                  </h2>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website. You can control cookie
                    settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    6. Your Rights
                  </h2>
                  <p className="mb-4 text-gray-700">
                    Depending on your location, you may have certain rights
                    regarding your personal information:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    7. Children&apos;s Privacy
                  </h2>
                  <p className="text-gray-700">
                    Our services are not intended for children under 13 years of
                    age. We do not knowingly collect personal information from
                    children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    8. Changes to This Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update this privacy policy from time to time. We will
                    notify you of any changes by posting the new policy on this
                    page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-700">
                    If you have any questions about this privacy policy, please
                    contact us at:
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 p-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong>{' '}
                      <a
                        href={`mailto:${SITE.EMAIL}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {SITE.EMAIL}
                      </a>
                    </p>
                    <p className="mt-2 text-gray-700">
                      <strong>Website:</strong>{' '}
                      <a
                        href={`https://${SITE.DOMAIN}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {SITE.DOMAIN}
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </Gradient>
    </div>
  )
}
