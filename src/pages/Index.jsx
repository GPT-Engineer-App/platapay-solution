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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 shadowed">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Empowering Your Business with Seamless Payment Solutions</h1>
          <p className="text-lg mb-8">Experience the future of payments with our innovative and secure platform.</p>
          <div className="space-x-4">
            <Button variant="primary">Learn More</Button>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16 shadowed">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadowed">
            <CardHeader>
              <CardTitle>Secure Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our platform ensures the highest level of security for all your transactions.</p>
            </CardContent>
          </Card>
          <Card className="shadowed">
            <CardHeader>
              <CardTitle>Easy Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrate our payment solutions seamlessly with your existing systems.</p>
            </CardContent>
          </Card>
          <Card className="shadowed">
            <CardHeader>
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our dedicated support team is available around the clock to assist you.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-16 shadowed">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Affordable Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadowed">
              <CardHeader>
                <CardTitle>Starter Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">₱15/month</p>
                <ul className="list-disc list-inside">
                  <li>Basic Features</li>
                  <li>Email Support</li>
                  <li>100 Transactions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadowed">
              <CardHeader>
                <CardTitle>Business Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">₱45/month</p>
                <ul className="list-disc list-inside">
                  <li>All Starter Features</li>
                  <li>Priority Support</li>
                  <li>1000 Transactions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadowed">
              <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">₱75/month</p>
                <ul className="list-disc list-inside">
                  <li>All Business Features</li>
                  <li>Dedicated Account Manager</li>
                  <li>Unlimited Transactions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto py-16 shadowed">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center max-w-2xl mx-auto">At Platapay, we are committed to providing top-notch payment solutions that cater to the unique needs of businesses in the Philippines. Our team of experts works tirelessly to ensure that our platform is secure, reliable, and easy to use.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 shadowed">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
            <div>
              <Input placeholder="Name" {...register("name", { required: true })} />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <Input type="email" placeholder="Email" {...register("email", { required: true })} />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <Textarea placeholder="Message" {...register("message", { required: true })} />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div className="text-center mt-8">
            <p>Address: 123 Platapay St., Manila, Philippines</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Email: support@platapay.ph</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 shadowed">
        <div className="container mx-auto text-center">
          <div className="space-x-4 mb-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <p>© 2023 Platapay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;