
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple demo login (would be replaced with Supabase auth)
    if (loginForm.email === "admin@example.com" && loginForm.password === "password") {
      setIsLoggedIn(true);
      toast({
        title: "Logged in successfully",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Try admin@example.com / password",
        variant: "destructive",
      });
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-portfolio-dark mb-8 text-center">
              Admin Dashboard
            </h1>
            
            {!isLoggedIn ? (
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      required
                      placeholder="admin@example.com"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      required
                      placeholder="password"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit"
                      className="w-full bg-portfolio-primary hover:bg-blue-600"
                    >
                      Log In
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>For demo purposes, use:</p>
                    <p>Email: admin@example.com</p>
                    <p>Password: password</p>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <div className="flex justify-end mb-8">
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="text-portfolio-primary border-portfolio-primary hover:bg-portfolio-primary/10"
                  >
                    Log Out
                  </Button>
                </div>
                
                <Tabs defaultValue="projects" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="about">About Page</TabsTrigger>
                    <TabsTrigger value="messages">Messages</TabsTrigger>
                  </TabsList>
                  
                  {/* Projects Tab */}
                  <TabsContent value="projects" className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-portfolio-dark mb-6">
                        Add New Project
                      </h2>
                      <form className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="title" className="block text-sm font-medium">
                            Project Title
                          </label>
                          <Input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter project title"
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="description" className="block text-sm font-medium">
                            Description
                          </label>
                          <Textarea
                            id="description"
                            name="description"
                            placeholder="Enter project description"
                            rows={3}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="categories" className="block text-sm font-medium">
                            Categories (comma separated)
                          </label>
                          <Input
                            id="categories"
                            name="categories"
                            type="text"
                            placeholder="Design, Branding, Web"
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="thumbnail" className="block text-sm font-medium">
                            Thumbnail Image
                          </label>
                          <Input
                            id="thumbnail"
                            name="thumbnail"
                            type="file"
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="images" className="block text-sm font-medium">
                            Project Images
                          </label>
                          <Input
                            id="images"
                            name="images"
                            type="file"
                            multiple
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="content" className="block text-sm font-medium">
                            Content
                          </label>
                          <Textarea
                            id="content"
                            name="content"
                            placeholder="Enter detailed project content"
                            rows={6}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            id="featured"
                            name="featured"
                            type="checkbox"
                            className="rounded text-portfolio-primary focus:ring-portfolio-primary"
                          />
                          <label htmlFor="featured" className="text-sm font-medium">
                            Featured Project
                          </label>
                        </div>
                        
                        <Button 
                          type="button" 
                          className="bg-portfolio-primary hover:bg-blue-600"
                          onClick={() => {
                            toast({
                              title: "Functionality coming soon",
                              description: "This feature will be connected to Supabase for data storage.",
                            });
                          }}
                        >
                          Add Project
                        </Button>
                      </form>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-portfolio-dark mb-6">
                        Manage Projects
                      </h2>
                      <p className="text-gray-600 mb-4">
                        This functionality will be connected to Supabase to display, edit, and delete projects.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          toast({
                            title: "Functionality coming soon",
                            description: "Connect to Supabase to enable project management.",
                          });
                        }}
                      >
                        Connect to Supabase
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* About Page Tab */}
                  <TabsContent value="about" className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-portfolio-dark mb-6">
                        Edit About Page
                      </h2>
                      <form className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="bio" className="block text-sm font-medium">
                            Biography
                          </label>
                          <Textarea
                            id="bio"
                            name="bio"
                            placeholder="Enter your biography"
                            rows={5}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="profileImage" className="block text-sm font-medium">
                            Profile Image
                          </label>
                          <Input
                            id="profileImage"
                            name="profileImage"
                            type="file"
                            className="w-full"
                          />
                        </div>
                        
                        <Button 
                          type="button" 
                          className="bg-portfolio-primary hover:bg-blue-600"
                          onClick={() => {
                            toast({
                              title: "Functionality coming soon",
                              description: "This feature will be connected to Supabase for data storage.",
                            });
                          }}
                        >
                          Save Changes
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                  
                  {/* Messages Tab */}
                  <TabsContent value="messages" className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-portfolio-dark mb-6">
                        Contact Form Submissions
                      </h2>
                      <p className="text-gray-600 mb-4">
                        This functionality will be connected to Supabase to display contact form submissions.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          toast({
                            title: "Functionality coming soon",
                            description: "Connect to Supabase to view form submissions.",
                          });
                        }}
                      >
                        Connect to Supabase
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPage;
