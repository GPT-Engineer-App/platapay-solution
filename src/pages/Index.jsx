import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <div className="space-y-16 adaptive-bg">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 shadowed adaptive-bg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Innovative Payment Solutions for Filipinos, by Filipinos.</h1>
          <p className="text-lg mb-8 text-gray-800">Affordable ways to innovate businesses of all sizes and a convenient e-wallet for citizens.</p>
          <div className="space-x-4">
            <Button variant="primary">Learn More</Button>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 shadowed adaptive-bg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Platapay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadowed adaptive-bg">
            <CardHeader>
              <CardTitle className="text-gray-800">Affordable Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">We provide cost-effective payment solutions for businesses of all sizes.</p>
            </CardContent>
          </Card>
          <Card className="shadowed adaptive-bg">
            <CardHeader>
              <CardTitle className="text-gray-800">Innovative Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">Our platform leverages the latest technology to ensure secure and efficient transactions.</p>
            </CardContent>
          </Card>
          <Card className="shadowed adaptive-bg">
            <CardHeader>
              <CardTitle className="text-gray-800">Convenient E-Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">Our e-wallet offers a convenient way for citizens to manage their finances.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-16 shadowed adaptive-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadowed adaptive-bg">
              <CardHeader>
                <CardTitle className="text-gray-800">Basic Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4 text-gray-800">₱10/month</p>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadowed adaptive-bg">
              <CardHeader>
                <CardTitle className="text-gray-800">Pro Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4 text-gray-800">₱30/month</p>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadowed adaptive-bg">
              <CardHeader>
                <CardTitle className="text-gray-800">Enterprise Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4 text-gray-800">₱50/month</p>
                <ul className="list-disc list-inside text-gray-800">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto py-16 shadowed adaptive-bg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Platapay</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-800">Platapay is a payment solution provider in the Philippines, developed by Filipinos for Filipinos. Our mission is to provide affordable and innovative payment solutions to businesses of all sizes and offer a convenient e-wallet for citizens.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 shadowed adaptive-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
            <div>
              <Input placeholder="Name" {...register("name", { required: true })} className="text-gray-800" />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <Input type="email" placeholder="Email" {...register("email", { required: true })} className="text-gray-800" />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <Textarea placeholder="Message" {...register("message", { required: true })} className="text-gray-800" />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div className="text-center mt-8 text-gray-800">
            <p>Address: 123 Platapay St., Manila, Philippines</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Email: support@platapay.ph</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 shadowed adaptive-bg">
        <div className="container mx-auto text-center">
          <div className="space-x-4 mb-4">
            <a href="#" className="hover:underline text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:underline text-gray-800">Terms of Service</a>
          </div>
          <p className="text-gray-800">© 2023 Platapay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;