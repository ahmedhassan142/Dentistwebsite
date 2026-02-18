import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: '5-signs-you-need-to-visit-dentist-immediately',
    title: '5 Signs You Need to Visit a Dentist Immediately',
    excerpt: 'Learn about the dental symptoms that require immediate professional attention to prevent serious complications.',
    category: 'Dental Health',
    readTime: '5 min read',
    date: '2024-01-15',
    image: '/images/blog/dental-health.jpg'
  },
  {
    slug: 'complete-guide-teeth-whitening-methods-safety',
    title: 'The Complete Guide to Teeth Whitening: Methods & Safety',
    excerpt: 'Explore different teeth whitening options, from professional treatments to at-home solutions, and learn what works best.',
    category: 'Cosmetic Dentistry',
    readTime: '8 min read',
    date: '2024-01-10',
    image: '/images/blog/teeth-whitening.jpg'
  },
  {
    slug: 'how-to-maintain-good-oral-hygiene-during-holidays',
    title: 'How to Maintain Good Oral Hygiene During Holidays',
    excerpt: 'Tips and tricks to keep your teeth healthy while enjoying holiday treats and maintaining your dental routine.',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: '2024-01-05',
    image: '/images/blog/holiday-care.jpg'
  },
  {
    slug: 'understanding-dental-implants-procedure-benefits',
    title: 'Understanding Dental Implants: Procedure and Benefits',
    excerpt: 'A comprehensive overview of dental implants, the procedure, recovery, and long-term benefits for missing teeth.',
    category: 'Restorative Dentistry',
    readTime: '7 min read',
    date: '2024-01-01',
    image: '/images/blog/implants.jpg'
  },
  {
    slug: 'connection-between-oral-health-and-overall-wellness',
    title: 'The Connection Between Oral Health and Overall Wellness',
    excerpt: 'Discover how your dental health impacts your overall health and why regular checkups are crucial for wellbeing.',
    category: 'General Dentistry',
    readTime: '6 min read',
    date: '2023-12-28',
    image: '/images/blog/oral-health.jpg'
  },
  {
    slug: 'invisalign-vs-traditional-braces-which-is-right',
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    excerpt: 'Compare the pros and cons of Invisalign and traditional braces to make an informed decision about orthodontic treatment.',
    category: 'Orthodontics',
    readTime: '6 min read',
    date: '2023-12-25',
    image: '/images/blog/invisalign.jpg'
  }
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/blog-hero.jpg"
            alt="Dental Blog Hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 mix-blend-multiply" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Dental Health Blog
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed animate-slide-up">
              Expert insights, tips, and updates on dental health, treatments, 
              and maintaining your perfect smile.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-sm font-semibold">Latest Article:</span>
                <span className="ml-2 text-sm">{blogPosts[0].title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All Posts', 'Dental Health', 'Cosmetic Dentistry', 'Orthodontics', 'Preventive Care'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white hover:bg-blue-600 hover:text-white text-gray-700 font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                    <Link href={`/Blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</time>
                    {/* <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center group"
                    >
                      Read More 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </Link> */}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/newsletter-bg.jpg"
                alt="Newsletter Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
            </div>
            <div className="relative z-10 p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated with Dental Tips</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and receive the latest dental health insights and practice updates.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white/90 backdrop-blur-sm"
                />
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}