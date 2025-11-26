import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Avanthi's Research and Technological Academy",
      period: "2021 - 2025",
      score: "CGPA: 7.83",
      description: "Focused on software development, data structures, algorithms, and full-stack web development",
    },
    {
      degree: "Intermediate (Class XII)",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Gayatri Junior College",
      period: "2019 - 2021",
      score: "735/1000",
      description: "Strong foundation in mathematics and logical reasoning",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "Class X",
      institution: "Sri Gnana Jyothi School",
      period: "2015 - 2019",
      score: "GPA: 7.83",
      description: "Comprehensive education with focus on science and mathematics",
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } md:w-1/2`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 right-0 transform translate-x-[calc(100%+1.5rem)] w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <div className="hidden md:block absolute top-8 left-0 transform -translate-x-[calc(100%+1.5rem)] w-4 h-4 bg-primary rounded-full border-4 border-background" />

                <Card className="border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.degree}
                        </CardTitle>
                        <p className="text-sm font-semibold text-primary">{item.field}</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <p className="font-medium text-foreground">{item.institution}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{item.period}</span>
                    </div>
                    
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {item.score}
                    </div>
                    
                    <p className="text-sm text-muted-foreground pt-2">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
