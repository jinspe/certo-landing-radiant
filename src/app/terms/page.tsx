import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Logo } from '@/components/logo'
import { SITE } from '@/utils/constants'

export default function TermsPage() {
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
                Terms of Service
              </h1>

              <p className="mb-6 text-gray-600">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mb-4 text-gray-700">
                    By accessing and using our services, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                  <p className="text-gray-700">
                    If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    2. Use License
                  </h2>
                  <p className="mb-4 text-gray-700">
                    Permission is granted to temporarily download one copy of
                    our materials for personal, non-commercial transitory
                    viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to reverse engineer any software</li>
                    <li>Remove any copyright or proprietary notations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    3. Service Availability
                  </h2>
                  <p className="text-gray-700">
                    We strive to provide continuous service availability but do
                    not guarantee uninterrupted access. We reserve the right to
                    modify, suspend, or discontinue the service at any time
                    without notice.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    4. User Accounts
                  </h2>
                  <p className="mb-4 text-gray-700">
                    When you create an account with us, you must provide
                    information that is accurate, complete, and current at all
                    times.
                  </p>
                  <p className="text-gray-700">
                    You are responsible for safeguarding the password and for
                    all activities that occur under your account.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    5. Prohibited Uses
                  </h2>
                  <p className="mb-4 text-gray-700">
                    You may not use our service:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                      For any unlawful purpose or to solicit others to perform
                      unlawful acts
                    </li>
                    <li>
                      To violate any international, federal, provincial, or
                      state regulations, rules, laws, or local ordinances
                    </li>
                    <li>
                      To infringe upon or violate our intellectual property
                      rights or the intellectual property rights of others
                    </li>
                    <li>
                      To harass, abuse, insult, harm, defame, slander,
                      disparage, intimidate, or discriminate
                    </li>
                    <li>To submit false or misleading information</li>
                    <li>
                      To upload or transmit viruses or any other type of
                      malicious code
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    6. Content
                  </h2>
                  <p className="mb-4 text-gray-700">
                    Our service allows you to post, link, store, share and
                    otherwise make available certain information, text,
                    graphics, videos, or other material. You are responsible for
                    the content that you post to the service.
                  </p>
                  <p className="text-gray-700">
                    We reserve the right to remove any content that violates
                    these terms or is otherwise objectionable.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    7. Privacy Policy
                  </h2>
                  <p className="text-gray-700">
                    Your privacy is important to us. Please review our Privacy
                    Policy, which also governs your use of the service, to
                    understand our practices.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    8. Termination
                  </h2>
                  <p className="text-gray-700">
                    We may terminate or suspend your account and bar access to
                    the service immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    9. Disclaimer
                  </h2>
                  <p className="text-gray-700">
                    The information on this service is provided on an &quot;as
                    is&quot; basis. To the fullest extent permitted by law, this
                    Company: excludes all representations and warranties
                    relating to this service and its contents, and excludes all
                    liability for damages arising out of or in connection with
                    your use of this service.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    10. Governing Law
                  </h2>
                  <p className="text-gray-700">
                    These terms and conditions are governed by and construed in
                    accordance with the laws and you irrevocably submit to the
                    exclusive jurisdiction of the courts in that state or
                    location.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    11. Changes to Terms
                  </h2>
                  <p className="text-gray-700">
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material,
                    we will provide at least 30 days notice prior to any new
                    terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-950">
                    12. Contact Information
                  </h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms of Service,
                    please contact us:
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
