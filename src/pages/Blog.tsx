import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import forestCanopy from "@/assets/forest-canopy.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "ADHD Explained: Key Signs, Common Misconceptions, and Paths to Help",
      date: "November 11th, 2025",
      excerpt: "ADHD affects people in many different ways, often influencing daily routines, focus, emotional balance, and the ability to stay on task. With the right support, caregivers, educators, and those living with ADHD can navigate life more effectively. Understandably, the lived experience can feel confusing, frustrat...",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop"
    },
    {
      title: "Effective Addiction Treatment for Lasting Recovery",
      date: "September 1st, 2025",
      excerpt: "Understanding the intricacies behind addiction and its treatment can seem overwhelming at first glance. However, when you take a step back and consider the human aspect, it becomes clear that a more approachable, fact-based approach is needed. This information aims to provide clarity and understanding about addiction treatment while maintaining compassion for those experiencing it...",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      title: "Understanding the Importance of General Mental Health",
      date: "August 12th, 2025",
      excerpt: "Consider the feeling of waking up on a morning where everything aligns perfectly; the sky seems bluer, your coffee tastes particularly great, and you can't help but notice a gentle sense settling in your mind. This sense of emotional well-being isn't just a figment of imagination or circumstantial luck. It represents a general sense of mental health that shapes how we experience life daily...",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${forestCanopy})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Insights for Emotional Wellness</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore transformative insights on mental wellness, emotional balance, and effective therapeutic strategies for living.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 italic">Posted on {post.date}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;