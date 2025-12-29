"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kontak", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container-professional">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-healthcare-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ISM</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">
                  PT IFOS SATRIA MAHKOTA
                </h1>
                <p className="text-xs text-muted-foreground">
                  Konstruksi Gedung Kesehatan
                </p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-sm font-bold text-foreground">
                  IFOS SATRIA MAHKOTA
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:085285703497"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0852-8570-3497</span>
            </a>
            <Button className="btn-professional bg-primary hover:bg-primary/90">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="w-10 h-10 bg-healthcare-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ISM</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">
                      PT IFOS SATRIA MAHKOTA
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Konstruksi Gedung Kesehatan
                    </p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <ul className="space-y-4">
                    {navigationItems.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Contact */}
                <div className="border-t border-border pt-6 space-y-4">
                  <a
                    href="tel:085285703497"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">Telepon</p>
                      <p className="text-sm">0852-8570-3497</p>
                    </div>
                  </a>
                  <Button className="w-full btn-professional bg-primary hover:bg-primary/90">
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}