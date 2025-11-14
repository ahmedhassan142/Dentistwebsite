// app/blog/page.tsx
const blogPosts = [
  {
    title: '5 Signs You Need to Visit a Dentist Immediately',
    excerpt: 'Learn about the dental symptoms that require immediate professional attention to prevent serious complications.',
    category: 'Dental Health',
    readTime: '5 min read',
    date: '2024-01-15',
    image: '/images/blog-dental-health.jpg'
  },
  {
    title: 'The Complete Guide to Teeth Whitening: Methods & Safety',
    excerpt: 'Explore different teeth whitening options, from professional treatments to at-home solutions, and learn what works best.',
    category: 'Cosmetic Dentistry',
    readTime: '8 min read',
    date: '2024-01-10',
    image: '/images/blog-teeth-whitening.jpg'
  },
  {
    title: 'How to Maintain Good Oral Hygiene During Holidays',
    excerpt: 'Tips and tricks to keep your teeth healthy while enjoying holiday treats and maintaining your dental routine.',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: '2024-01-05',
    image: '/images/blog-holiday-care.jpg'
  },
  {
    title: 'Understanding Dental Implants: Procedure and Benefits',
    excerpt: 'A comprehensive overview of dental implants, the procedure, recovery, and long-term benefits for missing teeth.',
    category: 'Restorative Dentistry',
    readTime: '7 min read',
    date: '2024-01-01',
    image: '/images/blog-implants.jpg'
  },
  {
    title: 'The Connection Between Oral Health and Overall Wellness',
    excerpt: 'Discover how your dental health impacts your overall health and why regular checkups are crucial for wellbeing.',
    category: 'General Dentistry',
    readTime: '6 min read',
    date: '2023-12-28',
    image: '/images/blog-oral-health.jpg'
  },
  {
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    excerpt: 'Compare the pros and cons of Invisalign and traditional braces to make an informed decision about orthodontic treatment.',
    category: 'Orthodontics',
    readTime: '6 min read',
    date: '2023-12-25',
    image: '/images/blog-invisalign.jpg'
  }
];

export default function Blog() {
  return (
    <div 
      className="min-h-screen py-20 relative"
      style={{
        backgroundImage: 'url("/images/blog-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 to-white/95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dental Health Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and updates on dental health, treatments, and maintaining your perfect smile.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
              {/* Image */}
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <time>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</time>
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div 
          className="mt-20 rounded-2xl p-8 text-white text-center relative overflow-hidden"
          style={{
            backgroundImage: 'url("/images/newsletter-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-500/90"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Dental Tips</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest dental health insights and practice updates.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white/90 backdrop-blur-sm"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}