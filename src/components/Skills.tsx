import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C", "JavaScript", "HTML", "CSS", "SQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Frameworks & Technologies",
      skills: ["Django", "React", "Spring Boot", "Tailwind CSS", "REST API"],
      color: "from-primary to-accent",
    },
    {
      icon: Database,
      title: "Data & Tools",
      skills: ["Time Series Analysis", "SARIMA", "Database Management", "Git", "VS Code"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Time Management", "Teamwork", "Problem Solving", "Documentation", "Presentation"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: "Python", level: 85 },
              { skill: "Django", level: 80 },
              { skill: "JavaScript", level: 75 },
              { skill: "React", level: 70 },
              { skill: "SQL", level: 80 },
              { skill: "Spring Boot", level: 75 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
