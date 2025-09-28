import { Instagram, Facebook, Youtube } from "lucide-react"

export default function SocialSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Connect on Social Media</h2>
          <p className="font-body text-muted-foreground text-lg">
            Follow our journey and get inspired by our latest work and beauty tips
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border text-center hover-lift transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">Instagram</h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                Daily inspiration, behind-the-scenes content, and client transformations
              </p>
              <a
                href="#"
                className="font-body text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                @sasvicreations
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover-lift transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">Facebook</h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                Community updates, event announcements, and client testimonials
              </p>
              <a
                href="#"
                className="font-body text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                Sasvi Creations
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center hover-lift transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">YouTube</h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                Makeup tutorials, beauty tips, and complete transformation videos
              </p>
              <a
                href="#"
                className="font-body text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                Sasvi Creations
              </a>
            </div>
          </div>

          <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20 text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Stay Connected</h3>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Join our social media community to stay updated on the latest beauty trends, get exclusive tips, and see
              our amazing client transformations. We love sharing the journey of making every client feel beautiful and
              confident.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-accent-foreground" />
              </a>
            </div>

            <p className="font-body text-muted-foreground text-sm mt-6">
              Best services for bridal makeovers and professional shoots - Follow us for daily inspiration!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
