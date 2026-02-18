'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, Clock, User, Tag, ArrowRight, ChevronRight, 
  ChevronLeft, Eye, ThumbsUp, Share2, Bookmark, Star,
  Facebook, Twitter, Linkedin, Mail, Sparkles,
  TrendingUp, FileText, Briefcase, X, AlertCircle,
  Phone, MapPin, MessageCircle
} from 'lucide-react';

// Blog data structure matching the blog page
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags?: string[];
  featured?: boolean;
  trending?: boolean;
}

// Blog posts data (matching the blog page)
const blogPosts: BlogPost[] = [
  {
    slug: '5-signs-you-need-to-visit-dentist-immediately',
    title: '5 Signs You Need to Visit a Dentist Immediately',
    excerpt: 'Learn about the dental symptoms that require immediate professional attention to prevent serious complications.',
    content: `
      <h2>When to Seek Emergency Dental Care</h2>
      <p>Dental emergencies can happen at any time. Knowing when to seek immediate care can mean the difference between saving and losing a tooth. Here are five critical signs that require immediate dental attention.</p>
      
      <h3>1. Severe Tooth Pain</h3>
      <p>If you're experiencing intense, persistent tooth pain that doesn't subside with over-the-counter pain relievers, it could indicate a serious infection or abscess. This type of pain often signals that the nerve is affected or that there's a deep cavity reaching the pulp.</p>
      
      <h3>2. Bleeding or Swollen Gums</h3>
      <p>While minor gum bleeding during brushing might indicate gingivitis, excessive or spontaneous bleeding accompanied by swelling, pain, or pus could signal a periodontal abscess or advanced gum disease requiring immediate treatment.</p>
      
      <h3>3. Knocked-Out Tooth</h3>
      <p>If a tooth gets knocked out, time is critical. With prompt action (within 30-60 minutes), there's a chance the tooth can be reimplanted successfully. Keep the tooth moist in milk or saliva and get to a dentist immediately.</p>
      
      <h3>4. Cracked or Broken Tooth</h3>
      <p>A cracked tooth can expose the sensitive inner layers to bacteria, leading to infection. Even if there's no pain, a crack can worsen over time. Immediate evaluation can determine the extent of damage and prevent further complications.</p>
      
      <h3>5. Signs of Infection</h3>
      <p>Facial swelling, fever, or a bad taste in your mouth accompanied by tooth pain could indicate a dental abscess. This is a serious condition that can spread to other parts of your body and requires immediate antibiotics and dental treatment.</p>
      
      <h2>What to Do in a Dental Emergency</h2>
      <p>If you experience any of these symptoms, contact our office immediately. We reserve time in our schedule for emergency cases and will do our best to see you the same day. Remember, delaying treatment can lead to more complex problems and higher costs down the road.</p>
    `,
    category: 'Dental Health',
    readTime: '5 min read',
    date: '2024-01-15',
    image: '/images/blog/dental-health.jpg',
    author: {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead Dentist, DDS',
      avatar: '/images/authors/dr-sarah.jpg',
      bio: 'Dr. Sarah Mitchell has been practicing dentistry for over 15 years, specializing in emergency and restorative dentistry. She is passionate about patient education and preventive care.'
    },
    tags: ['Dental Emergency', 'Tooth Pain', 'Oral Health', 'Emergency Care'],
    featured: true,
    trending: true
  },
  {
    slug: 'complete-guide-teeth-whitening-methods-safety',
    title: 'The Complete Guide to Teeth Whitening: Methods & Safety',
    excerpt: 'Explore different teeth whitening options, from professional treatments to at-home solutions, and learn what works best.',
    content: `
      <h2>Understanding Teeth Whitening Options</h2>
      <p>A bright, white smile is something many people desire. With numerous whitening options available, it's important to understand the differences, effectiveness, and safety considerations of each method.</p>
      
      <h3>Professional In-Office Whitening</h3>
      <p>Professional whitening performed in our office offers the fastest and most dramatic results. We use high-concentration whitening agents with protective measures for your gums. The entire process takes about 60-90 minutes and can lighten teeth by several shades in a single visit.</p>
      
      <h3>Take-Home Professional Kits</h3>
      <p>We provide custom-fitted trays and professional-grade whitening gel for at-home use. This method offers the convenience of whitening on your schedule with the safety of custom trays that prevent gum irritation. Results typically appear within 1-2 weeks.</p>
      
      <h3>Over-the-Counter Products</h3>
      <p>Whitening strips, toothpastes, and strips are readily available but generally less effective than professional treatments. They may also cause uneven results or increased sensitivity if not used properly.</p>
      
      <h3>Safety Considerations</h3>
      <p>Not everyone is a good candidate for whitening. Pregnant women, people with gum disease, sensitive teeth, or existing dental work should consult with us before starting any whitening treatment. We'll evaluate your oral health and recommend the safest, most effective option for you.</p>
    `,
    category: 'Cosmetic Dentistry',
    readTime: '8 min read',
    date: '2024-01-10',
    image: '/images/blog/teeth-whitening.jpg',
    author: {
      name: 'Dr. James Wilson',
      role: 'Cosmetic Dentistry Specialist',
      avatar: '/images/authors/dr-james.jpg',
      bio: 'Dr. James Wilson is our cosmetic dentistry expert with extensive training in teeth whitening, veneers, and smile makeovers.'
    },
    tags: ['Teeth Whitening', 'Cosmetic Dentistry', 'Smile Makeover', 'Dental Aesthetics'],
    featured: false,
    trending: true
  },
  {
    slug: 'how-to-maintain-good-oral-hygiene-during-holidays',
    title: 'How to Maintain Good Oral Hygiene During Holidays',
    excerpt: 'Tips and tricks to keep your teeth healthy while enjoying holiday treats and maintaining your dental routine.',
    content: `
      <h2>Holiday Oral Health Guide</h2>
      <p>The holiday season brings festive foods, sweets, and often a disruption to our regular routines. Here's how to enjoy the celebrations while protecting your dental health.</p>
      
      <h3>Smart Snacking Strategies</h3>
      <p>Limit sticky, sugary treats that cling to teeth. If you indulge, try to do so during meals when saliva production is higher rather than grazing throughout the day. Drink plenty of water to help wash away food particles.</p>
      
      <h3>Maintain Your Routine</h3>
      <p>Even with late nights and travel, don't skip your brushing and flossing routine. Pack a travel-sized dental kit for on-the-go cleaning. Set reminders on your phone if needed.</p>
      
      <h3>Choose Teeth-Friendly Options</h3>
      <p>Cheese, nuts, and crunchy vegetables are great options that actually help clean teeth and neutralize acids. They make excellent alternatives to constant sugary snacking.</p>
      
      <h3>Post-Holiday Checkup</h3>
      <p>Schedule a dental cleaning for early January to remove any holiday buildup and start the new year with a fresh, healthy smile.</p>
    `,
    category: 'Preventive Care',
    readTime: '4 min read',
    date: '2024-01-05',
    image: '/images/blog/holiday-care.jpg',
    author: {
      name: 'Dr. Emily Chen',
      role: 'Preventive Care Specialist',
      avatar: '/images/authors/dr-emily.jpg',
      bio: 'Dr. Emily Chen focuses on preventive dentistry and patient education, helping patients maintain optimal oral health between visits.'
    },
    tags: ['Oral Hygiene', 'Holiday Tips', 'Preventive Care', 'Dental Health'],
    featured: false,
    trending: false
  },
  {
    slug: 'understanding-dental-implants-procedure-benefits',
    title: 'Understanding Dental Implants: Procedure and Benefits',
    excerpt: 'A comprehensive overview of dental implants, the procedure, recovery, and long-term benefits for missing teeth.',
    content: `
      <h2>Dental Implants: The Gold Standard for Tooth Replacement</h2>
      <p>Dental implants have revolutionized restorative dentistry, offering a permanent solution for missing teeth that looks, feels, and functions like natural teeth.</p>
      
      <h3>What Are Dental Implants?</h3>
      <p>An implant is a titanium post surgically placed in the jawbone, serving as an artificial tooth root. Over time, the bone integrates with the implant through osseointegration, creating a stable foundation for a crown, bridge, or denture.</p>
      
      <h3>The Procedure</h3>
      <p>The implant process typically occurs in stages: initial consultation and planning, surgical placement of the implant, healing period (3-6 months), and finally attaching the custom-made crown. While the timeline varies, the result is worth the wait.</p>
      
      <h3>Benefits of Implants</h3>
      <ul>
        <li><strong>Natural Appearance:</strong> Implants look and feel like natural teeth</li>
        <li><strong>Preserve Bone:</strong> Stimulates bone growth, preventing jawbone deterioration</li>
        <li><strong>Protect Adjacent Teeth:</strong> No need to alter healthy neighboring teeth</li>
        <li><strong>Durability:</strong> With proper care, implants can last a lifetime</li>
        <li><strong>Improved Function:</strong> Eat, speak, and smile with confidence</li>
      </ul>
    `,
    category: 'Restorative Dentistry',
    readTime: '7 min read',
    date: '2024-01-01',
    image: '/images/blog/implants.jpg',
    author: {
      name: 'Dr. Michael Roberts',
      role: 'Implantology Specialist',
      avatar: '/images/authors/dr-michael.jpg',
      bio: 'Dr. Michael Roberts has placed thousands of successful implants and is recognized for his expertise in complex restorative cases.'
    },
    tags: ['Dental Implants', 'Restorative Dentistry', 'Tooth Replacement', 'Oral Surgery'],
    featured: true,
    trending: false
  },
  {
    slug: 'connection-between-oral-health-and-overall-wellness',
    title: 'The Connection Between Oral Health and Overall Wellness',
    excerpt: 'Discover how your dental health impacts your overall health and why regular checkups are crucial for wellbeing.',
    content: `
      <h2>Oral Health: A Window to Your Overall Health</h2>
      <p>Your mouth is often called the gateway to your body, and for good reason. Research has established strong links between oral health and various systemic conditions.</p>
      
      <h3>Heart Disease Connection</h3>
      <p>Studies show that people with gum disease have higher rates of cardiovascular disease. The inflammation and bacteria from infected gums may contribute to arterial plaque buildup and heart problems.</p>
      
      <h3>Diabetes Impact</h3>
      <p>Diabetes and gum disease have a bidirectional relationship. Poor blood sugar control increases gum disease risk, while severe gum disease can make it harder to control blood glucose levels.</p>
      
      <h3>Respiratory Health</h3>
      <p>Oral bacteria can be inhaled into the lungs, potentially causing pneumonia and worsening COPD. Good oral hygiene is especially important for older adults and those with respiratory conditions.</p>
      
      <h3>Pregnancy Considerations</h3>
      <p>Pregnant women with gum disease may have higher risks of preterm birth and low birth weight. Maintaining good oral health during pregnancy protects both mother and baby.</p>
      
      <h3>Regular Checkups Matter</h3>
      <p>Routine dental visits do more than check for cavities. We screen for signs of systemic diseases, oral cancer, and other conditions that affect overall health.</p>
    `,
    category: 'General Dentistry',
    readTime: '6 min read',
    date: '2023-12-28',
    image: '/images/blog/oral-health.jpg',
    author: {
      name: 'Dr. Lisa Thompson',
      role: 'General Dentist',
      avatar: '/images/authors/dr-lisa.jpg',
      bio: 'Dr. Lisa Thompson is passionate about the oral-systemic health connection and educating patients on comprehensive wellness.'
    },
    tags: ['Oral Health', 'Systemic Health', 'Wellness', 'Prevention'],
    featured: false,
    trending: true
  },
  {
    slug: 'invisalign-vs-traditional-braces-which-is-right',
    title: 'Invisalign vs Traditional Braces: Which is Right for You?',
    excerpt: 'Compare the pros and cons of Invisalign and traditional braces to make an informed decision about orthodontic treatment.',
    content: `
      <h2>Choosing the Right Orthodontic Treatment</h2>
      <p>Straightening your teeth is an investment in your smile and confidence. Understanding the differences between Invisalign and traditional braces helps you make the best choice for your lifestyle and needs.</p>
      
      <h3>Invisalign: Clear Aligners</h3>
      <p>Invisalign uses a series of custom-made, removable clear aligners that gradually shift teeth. Benefits include virtually invisible appearance, removable for eating and cleaning, and fewer office visits. Best for mild to moderate cases.</p>
      
      <h3>Traditional Braces</h3>
      <p>Metal or ceramic brackets bonded to teeth with wires adjusted periodically. Benefits include effectiveness for complex cases, no compliance issues (always working), and typically faster for severe misalignment.</p>
      
      <h3>Comparison Factors</h3>
      <ul>
        <li><strong>Aesthetics:</strong> Invisalign wins for near-invisibility</li>
        <li><strong>Complexity:</strong> Braces handle more severe cases</li>
        <li><strong>Compliance:</strong> Braces don't require patient discipline</li>
        <li><strong>Lifestyle:</strong> Invisalign allows normal eating and easier cleaning</li>
        <li><strong>Duration:</strong> Similar treatment times for appropriate cases</li>
      </ul>
      
      <h3>Making Your Decision</h3>
      <p>During your consultation, we'll evaluate your specific needs and discuss which option will achieve the best results. Many patients are candidates for either option, and the choice often comes down to personal preference.</p>
    `,
    category: 'Orthodontics',
    readTime: '6 min read',
    date: '2023-12-25',
    image: '/images/blog/invisalign.jpg',
    author: {
      name: 'Dr. David Kim',
      role: 'Orthodontic Specialist',
      avatar: '/images/authors/dr-david.jpg',
      bio: 'Dr. David Kim specializes in both traditional orthodontics and Invisalign treatment, helping patients achieve their ideal smiles.'
    },
    tags: ['Invisalign', 'Braces', 'Orthodontics', 'Straight Teeth'],
    featured: true,
    trending: true
  }
];

// Helper function to get post by slug
const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get related posts
const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.slug !== currentPost.slug && 
      (post.category === currentPost.category || 
       post.tags?.some(tag => currentPost.tags?.includes(tag)))
    )
    .slice(0, limit);
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundPost = getPostBySlug(slug);
      if (!foundPost) {
        notFound();
        return;
      }
      
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost, 3));
      setLoading(false);
    }, 500);
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    setShowShareMenu(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-blue-200 rounded w-1/4 mb-4"></div>
            <div className="h-[400px] bg-blue-200 rounded-3xl mb-6"></div>
            <div className="h-6 bg-blue-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-blue-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-blue-200 rounded w-full"></div>
              <div className="h-4 bg-blue-200 rounded w-full"></div>
              <div className="h-4 bg-blue-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      
      {/* ========== HERO SECTION WITH BREADCRUMB ========== */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/blog-hero.jpg"
            alt="Dental Blog"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80 mix-blend-multiply" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <div className="flex items-center text-sm mb-4">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/Blogs" className="hover:text-blue-200 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-blue-200">{post.category}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Article Column */}
            <div className="lg:col-span-2">
              <article className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100">
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {post.author?.name.charAt(0) || 'D'}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{post.author?.name || 'Dental Expert'}</p>
                      <p className="text-sm text-gray-600">{post.author?.role || 'Dentist'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 ml-auto">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8 group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>
                  </div>

                  {/* Interaction Buttons */}
                  <div className="absolute bottom-6 right-6 flex items-center space-x-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Like article"
                    >
                      <ThumbsUp className={`w-5 h-5 ${isLiked ? 'fill-blue-500 text-blue-500' : 'text-white'}`} />
                    </button>
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Bookmark article"
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-blue-500 text-blue-500' : 'text-white'}`} />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-colors"
                        aria-label="Share article"
                      >
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                      
                      {/* Share Menu */}
                      {showShareMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                          <button
                            onClick={() => handleShare('facebook')}
                            className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                            Facebook
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                            Twitter
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                            LinkedIn
                          </button>
                          <button
                            onClick={() => handleShare('email')}
                            className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          >
                            <Mail className="w-4 h-4 mr-3 text-gray-600" />
                            Email
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Article Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>2.5K views</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>328 likes</span>
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Link
                            key={tag}
                            href={`/Blogs?tag=${tag}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-teal-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Tags Section */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Tag className="w-5 h-5 mr-2 text-blue-500" />
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/Blogs?tag=${tag}`}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors text-sm font-medium"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio */}
                {post.author && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                        {post.author.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                        <p className="text-blue-600 text-sm mb-2">{post.author.role}</p>
                        <p className="text-gray-600 text-sm">{post.author.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* ========== SIDEBAR ========== */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-3xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Dental Advice?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Have questions about your dental health? Our team is here to help.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-xs text-white/80">(123) 456-7890</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    <div>
                      <p className="text-sm font-medium">Live Chat</p>
                      <p className="text-xs text-white/80">Average response: 2 min</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
                    You May Also Like
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/Blogs/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                              {related.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              {related.readTime}
                              <span className="mx-2">•</span>
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(related.date).split(',')[0]}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['All Posts', 'Dental Health', 'Cosmetic Dentistry', 'Orthodontics', 'Preventive Care', 'Restorative Dentistry'].map((category) => (
                    <Link
                      key={category}
                      href={`/Blog?category=${category}`}
                      className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-xl transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{category}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Emergency Info */}
              <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
                <div className="flex items-center mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-red-700">Dental Emergency?</h3>
                </div>
                <p className="text-sm text-red-600 mb-4">
                  Don't wait. Call us immediately for emergency dental care.
                </p>
                <a
                  href="tel:+1234567890"
                  className="block w-full bg-red-500 text-white text-center px-4 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
                >
                  Emergency: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER SECTION ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
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

      {/* ========== BACK TO BLOG ========== */}
      <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/Blog"
            className="inline-flex items-center text-blue-600 hover:text-teal-600 font-semibold transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}