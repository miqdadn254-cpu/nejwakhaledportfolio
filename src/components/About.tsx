const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12 animate-fade-in">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-gold mb-6">
              Our Vision
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto" />
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
            <p className="first-letter:text-6xl first-letter:font-display first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              At Najwa Khaled PDM Contractors, we breathe life into spaces through a harmonious blend of artistry and functionality. Our passion is to transform your environment into a sanctuary of style, where Scandinavian elegance, minimalist clarity, and industrial strength blend seamlessly.
            </p>

            <p>
              We take pride in creating spaces that not only reflect your personality and vision but also enhance your everyday living experience. Our services go beyond aesthetics, we focus on delivering crafted solutions that cater to your unique needs, ensuring comfort, practicality, and sophistication in every detail.
            </p>

            <p>
              With meticulous attention to detail, we deliver unparalleled painting, decorating, and maintenance solutions. From conceptualization to completion, our team is committed to excellence, offering exceptional interior design, seamless remodeling, and expert installation.
            </p>

            <div className="pt-8 text-center">
              <p className="text-2xl md:text-3xl font-display text-gold italic">
                We believe every space has the potential to become a masterpiece.
              </p>
            </div>

            <p className="text-center">
              Trust us to bring your dream interiors to life with creativity, precision, and a passion for redefining the essence of modern living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
