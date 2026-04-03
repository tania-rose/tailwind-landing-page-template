import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function TeacherTrainingOptin() {
  return (
    <>
      {/* Hero / Opt-in Section */}
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Top badge */}
            <div className="pb-12 text-center md:pb-16">
              <div
                className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
                data-aos="zoom-y-out"
              >
                <div className="inline-flex items-center gap-3 py-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                    <svg
                      className="h-4 w-4 fill-amber-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0L9.796 5.528H15.804L10.904 8.944L12.702 14.472L8 11.056L3.298 14.472L5.096 8.944L0.196 5.528H6.204L8 0Z" />
                    </svg>
                    Yoga Alliance Certified
                  </span>
                  <span className="text-sm text-gray-500">
                    200hr | 300hr | 500hr Programmes
                  </span>
                </div>
              </div>

              <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Begin Your Journey as a{" "}
                <br className="max-lg:hidden" />
                Yoga Teacher
              </h1>

              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Download our free brochure with complete course outlines,
                  upcoming training dates, and pricing for all Yogahub teacher
                  training programmes.
                </p>
              </div>
            </div>

            {/* Two-column: Form + Brochure Preview */}
            <div
              className="mx-auto max-w-5xl"
              data-aos="zoom-y-out"
              data-aos-delay={450}
            >
              <div className="relative before:absolute before:inset-0 before:-z-10 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-16">
                  {/* Left: Brochure preview card */}
                  <div className="text-center md:text-left">
                    <div className="relative mx-auto inline-block md:mx-0">
                      {/* Brochure mockup */}
                      <div className="relative rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 p-8 shadow-xl ring-1 ring-gray-200/60">
                        <div className="mb-4 text-center">
                          <div className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                            <svg
                              className="h-7 w-7 text-amber-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            Yogahub
                          </h3>
                          <p className="text-sm font-medium text-amber-700">
                            Teacher Training Brochure
                          </p>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Full course outlines &amp; curriculum
                          </div>
                          <div className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Upcoming training dates &amp; schedules
                          </div>
                          <div className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Pricing &amp; payment plan options
                          </div>
                          <div className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Meet your lead trainers
                          </div>
                          <div className="flex items-start gap-2">
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            Graduate testimonials &amp; success stories
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Opt-in form */}
                  <div>
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/60">
                      <h2 className="mb-2 text-2xl font-bold text-gray-900">
                        Get Your Free Brochure
                      </h2>
                      <p className="mb-6 text-sm text-gray-500">
                        Enter your details below and we'll send the brochure
                        straight to your inbox.
                      </p>
                      <form>
                        <div className="space-y-4">
                          <div>
                            <label
                              className="mb-1 block text-sm font-medium text-gray-700"
                              htmlFor="first-name"
                            >
                              First Name
                            </label>
                            <input
                              id="first-name"
                              className="form-input w-full py-2"
                              type="text"
                              placeholder="Sarah"
                              required
                            />
                          </div>
                          <div>
                            <label
                              className="mb-1 block text-sm font-medium text-gray-700"
                              htmlFor="last-name"
                            >
                              Last Name
                            </label>
                            <input
                              id="last-name"
                              className="form-input w-full py-2"
                              type="text"
                              placeholder="Johnson"
                              required
                            />
                          </div>
                          <div>
                            <label
                              className="mb-1 block text-sm font-medium text-gray-700"
                              htmlFor="optin-email"
                            >
                              Email Address
                            </label>
                            <input
                              id="optin-email"
                              className="form-input w-full py-2"
                              type="email"
                              placeholder="sarah@example.com"
                              required
                            />
                          </div>
                          <div>
                            <label
                              className="mb-1 block text-sm font-medium text-gray-700"
                              htmlFor="interest"
                            >
                              Which programme interests you?
                            </label>
                            <select
                              id="interest"
                              className="form-select w-full py-2"
                            >
                              <option value="">Not sure yet</option>
                              <option value="200hr">
                                200hr Foundation Training
                              </option>
                              <option value="300hr">
                                300hr Advanced Training
                              </option>
                              <option value="500hr">
                                500hr Complete Training
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-6">
                          <button className="btn group w-full bg-linear-to-t from-amber-600 to-amber-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
                            <span className="relative inline-flex items-center">
                              Download Free Brochure{" "}
                              <span className="ml-1 tracking-normal text-amber-200 transition-transform group-hover:translate-x-0.5">
                                -&gt;
                              </span>
                            </span>
                          </button>
                        </div>
                        <p className="mt-4 text-center text-xs text-gray-400">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div
              className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
              data-aos="fade-up"
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Three Pathways to Transform Your Practice
              </h2>
              <p className="text-lg text-gray-700">
                Whether you're just starting out or deepening an established
                teaching career, Yogahub has a programme for you.
              </p>
            </div>

            {/* Course cards */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* 200hr Card */}
              <div
                className="group rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/60 transition hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  200hr Foundation
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Your entry into the world of yoga teaching. Build a strong
                  foundation in asana, anatomy, philosophy, and teaching
                  methodology.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Weekday &amp; weekend options
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Yoga Alliance accredited
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Payment plans available
                  </li>
                </ul>
              </div>

              {/* 300hr Card */}
              <div
                className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/60 transition hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="absolute -top-3 right-6 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  300hr Advanced
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Deepen your expertise with advanced techniques, specialised
                  workshops, and mentored teaching practice.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Modular &amp; flexible scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Specialisation electives
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Mentored teaching hours
                  </li>
                </ul>
              </div>

              {/* 500hr Card */}
              <div
                className="group rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/60 transition hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  500hr Complete
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  The full journey from beginner to confident, qualified teacher.
                  Combines our 200hr and 300hr programmes with exclusive
                  bonuses.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Best value bundle
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Extended mentorship included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 shrink-0 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Business &amp; marketing module
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Stats row */}
            <div
              className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4"
              data-aos="fade-up"
            >
              <div>
                <div className="mb-1 text-4xl font-bold text-amber-400">
                  500+
                </div>
                <div className="text-sm text-gray-400">
                  Graduates &amp; Counting
                </div>
              </div>
              <div>
                <div className="mb-1 text-4xl font-bold text-amber-400">
                  15+
                </div>
                <div className="text-sm text-gray-400">
                  Years of Excellence
                </div>
              </div>
              <div>
                <div className="mb-1 text-4xl font-bold text-amber-400">
                  98%
                </div>
                <div className="text-sm text-gray-400">
                  Student Satisfaction
                </div>
              </div>
              <div>
                <div className="mb-1 text-4xl font-bold text-amber-400">
                  3
                </div>
                <div className="text-sm text-gray-400">
                  Programme Levels
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div
              className="mx-auto mt-12 max-w-3xl text-center md:mt-16"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.7),transparent)1] py-8">
                <blockquote className="mb-4 text-xl text-gray-300 md:text-2xl">
                  &ldquo;Yogahub&rsquo;s teacher training completely changed my
                  life. The depth of the curriculum, the support from the
                  trainers, and the community of fellow students made it an
                  unforgettable experience. I graduated feeling truly prepared
                  to teach.&rdquo;
                </blockquote>
                <cite className="not-italic">
                  <span className="font-medium text-gray-200">
                    Emma Richardson
                  </span>{" "}
                  <span className="text-gray-500">
                    - 200hr Graduate, 2024
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div
              className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
              data-aos="zoom-y-out"
            >
              {/* Glow */}
              <div
                className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
                aria-hidden="true"
              >
                <div className="h-56 w-[480px] rounded-full border-[20px] border-amber-500 blur-3xl" />
              </div>
              <div className="px-4 py-12 md:px-12 md:py-20">
                <h2 className="mb-4 text-3xl font-bold text-gray-200 md:text-4xl">
                  Your Teaching Journey Starts Here
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
                  Get all the details you need to make your decision. Download
                  the free Yogahub teacher training brochure today.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <a
                    className="btn group w-full bg-linear-to-t from-amber-600 to-amber-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:w-auto"
                    href="#top"
                  >
                    <span className="relative inline-flex items-center">
                      Get the Free Brochure{" "}
                      <span className="ml-1 tracking-normal text-amber-200 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
