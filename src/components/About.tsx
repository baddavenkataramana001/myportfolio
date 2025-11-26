import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Target, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Proficient in C, Python, Django, JavaScript, and full-stack web development",
    },
    {
      icon: Brain,
      title: "Quick Learner",
      description: "Passionate about exploring and mastering new technologies and frameworks",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Focused on building efficient solutions for real-world applications",
    },
    {
      icon: Rocket,
      title: "Dedicated Developer",
      description: "Committed to writing clean code and delivering quality projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software developer currently pursuing my B.Tech in Computer Science
                from <span className="text-primary font-semibold">Avanthi's Research and Technological Academy</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in programming languages like Python, C, and JavaScript,
                I specialize in building full-stack web applications using modern frameworks like
                Django and React. My journey in software development is driven by curiosity and
                a commitment to continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly interested in time series analysis, web development, and creating
                practical solutions that make a difference. My experience includes developing
                weather prediction systems and e-commerce platforms, where I've honed my skills
                in both frontend and backend development.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
