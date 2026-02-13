import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, Share2, Printer } from 'lucide-react';

const blogPosts = [
  {
    slug: '5-signs-you-need-to-visit-dentist-immediately',
    title: '5 Signs You Need to Visit a Dentist Immediately',
    excerpt: 'Learn about the dental symptoms that require immediate professional attention to prevent serious complications.',
    category: 'Dental Health',
    readTime: '5 min read',
    date: '2024-01-15',
    image: '/images/blog/dental-health.jpg',
    author: 'Dr. Sarah Johnson',
    content: `
      <h2>Don't Ignore These Dental Warning Signs</h2>
      <p>Your oral health can provide important clues about your overall health. Some dental symptoms require immediate professional attention to prevent serious complications.</p>
      
      <h3>1. Severe Toothache</h3>
      <p>A persistent, severe toothache that doesn't go away with over-the-counter pain relievers may indicate an infection or abscess. This requires immediate dental attention.</p>
      
      <h3>2. Bleeding Gums</h3>
      <p>While occasional bleeding when flossing might be normal, consistent bleeding could indicate gum disease or other serious conditions.</p>
      
      <h3>3. Swelling in the Mouth or Face</h3>
      <p>Any swelling in your mouth, face, or neck could indicate a serious infection that requires immediate treatment.</p>
      
      <h3>4. Loose Teeth</h3>
      <p>Adult teeth should never feel loose. If you experience this, it's a sign of advanced gum disease or other dental issues.</p>
      
      <h3>5. Jaw Pain or Clicking</h3>
      <p>Persistent jaw pain or clicking when opening your mouth could indicate TMJ disorders or other problems.</p>
      
      <p>Remember, when in doubt, it's always better to see your dentist. Early intervention can prevent more serious and costly problems down the road.</p>
    `
  },
  // Add content for other blog posts similarly
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
          <div className="text-white max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/blog"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </button>
            </div>
          </div>

          {/* Article */}
          <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">About {post.author}</h3>
                  <p className="text-gray-600 mt-1">
                    Dr. Sarah Johnson is our Chief Dental Surgeon with over 15 years of experience 
                    in cosmetic and restorative dentistry. She is passionate about patient education 
                    and preventive care.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-blue-600 font-semibold">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}