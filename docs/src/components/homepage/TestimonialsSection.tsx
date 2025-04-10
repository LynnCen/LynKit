import React from 'react'

type TestimonialProps = {
  quote: string
  name: string
  title: string
  avatarUrl: string
  index: number
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  avatarUrl,
  index,
}) => {
  const animationDelay = `${index * 0.2}s`

  return (
    <div
      className="testimonial-card reveal-item bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 relative overflow-hidden"
      style={{ animationDelay }}
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 opacity-10 text-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">{quote}</p>

      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100 dark:border-gray-700"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Developers Are Saying
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how LynKit has transformed the development workflow for
            teams around the world
          </p>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="LynKit has completely transformed our development process. The components are beautifully designed and the documentation is top-notch. It's saved us hundreds of hours already."
            name="Sarah Chen"
            title="Senior Frontend Developer, TechFlow"
            avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            index={0}
          />

          <Testimonial
            quote="The accessibility features built into every component have been a game-changer for our project. We no longer have to worry about compliance - it's all handled for us."
            name="Marcus Johnson"
            title="UI Engineering Lead, Accessify"
            avatarUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            index={1}
          />

          <Testimonial
            quote="I've tried many component libraries, but LynKit stands out for its attention to detail and developer experience. The hooks and utilities save so much time on every project."
            name="Aisha Patel"
            title="Full Stack Developer, StartupForge"
            avatarUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            index={2}
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
