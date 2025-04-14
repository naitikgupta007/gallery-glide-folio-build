
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const awards = [
    { title: "Design Excellence Award", year: "2023" },
    { title: "Creative Artist of the Year", year: "2022" },
    { title: "Photography Showcase Winner", year: "2021" },
  ];
  
  const clients = [
    "Nike", "Apple", "Adidas", "Coca-Cola", "Microsoft", "Google"
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Image Column */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                    alt="John Doe"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Content Column */}
              <div>
                <h1 className="text-4xl font-bold text-portfolio-dark mb-6">About Me</h1>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Hi, I'm John Doe, a freelance illustrator and designer with over 8 years of professional experience. 
                    I specialize in creating vibrant, meaningful visuals that tell compelling stories and evoke emotion.
                  </p>
                  <p>
                    My journey began in traditional art, but I've since embraced digital tools to expand my creative capabilities. 
                    I believe in the power of visual communication to transcend language barriers and connect people on a deeper level.
                  </p>
                  <p>
                    When I'm not working on client projects, you can find me exploring new artistic techniques, 
                    traveling for inspiration, or teaching design workshops to aspiring creatives.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="bg-portfolio-primary hover:bg-blue-600">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Awards and Clients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
              {/* Awards */}
              <div>
                <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Awards & Recognition</h2>
                <ul className="space-y-4">
                  {awards.map((award, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 text-portfolio-primary font-medium">
                        {award.year}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-portfolio-dark">{award.title}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Clients */}
              <div>
                <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Clients I've Worked With</h2>
                <div className="grid grid-cols-2 gap-4">
                  {clients.map((client, index) => (
                    <div 
                      key={index} 
                      className="py-3 px-6 rounded-lg bg-portfolio-secondary text-center"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
