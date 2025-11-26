import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Weather Prediction Using Time Series",
      description:
        "Built a predictive application using SARIMA model to forecast weather conditions based on historical time-series data. Implemented data preprocessing, model training, and evaluation techniques.",
      technologies: ["Python", "SARIMA", "Time Series", "Data Analysis", "Machine Learning"],
      outcome: "Successfully predicts future weather conditions with high accuracy",
      image: "weather",
    },
    {
      title: "Online Book Store",
      description:
        "A comprehensive full-stack e-commerce platform for browsing, searching, and purchasing books. Features include advanced search by author, title, and subject, user authentication, and order management.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL", "REST API"],
      outcome: "Fully functional bookstore with seamless user experience",
      image: "bookstore",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-300">
                    {project.title.split(" ")[0]}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-2">
                  <p className="text-sm font-semibold text-foreground mb-1">Outcome:</p>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
