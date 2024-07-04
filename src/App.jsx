import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Change to navbar layout
import Index from "./pages/Index.jsx";
import { ThemeProvider } from "next-themes"; // Add this import
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Features",
    to: "/#features",
  },
  {
    title: "Pricing",
    to: "/#pricing",
  },
  {
    title: "About Us",
    to: "/#about",
  },
  {
    title: "Contact",
    to: "/#contact",
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider attribute="class"> {/* Wrap the application with ThemeProvider */}
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                {/* Add more routes here as needed */}
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
