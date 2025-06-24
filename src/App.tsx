import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          {/* Placeholder routes - to be implemented later */}
          <Route
            path="/categories"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Categories - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/category/:id"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Category Page - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/deals"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Deals - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">About - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/new-arrivals"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  New Arrivals - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/best-sellers"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Best Sellers - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/sale"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Sale - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/gift-cards"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Gift Cards - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/help"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Help Center - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/track-order"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Track Order - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/returns"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Returns - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/shipping"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Shipping Info - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/size-guide"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Size Guide - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/account"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">My Account - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Order History - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/wishlist"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Wishlist - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Contact - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/careers"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Careers - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/press"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">Press - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/sustainability"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Sustainability - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/privacy"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Privacy Policy - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Terms of Service - Coming Soon
                </h1>
              </div>
            }
          />
          <Route
            path="/cookies"
            element={
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold">
                  Cookie Policy - Coming Soon
                </h1>
              </div>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
