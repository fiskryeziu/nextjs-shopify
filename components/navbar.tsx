"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingCart, Menu, Heart } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TMenu } from "@/lib/types";

export function NavBar({ menu }: { menu: TMenu[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full px-5 md:px-10 bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <div>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              {menu.length
                ? menu.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      className={`text-foreground/60 hover:text-foreground transition-colors text-base py-2
                      ${pathname === item.url ? "text-foreground font-medium" : ""}
                    `}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))
                : null}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold">
            Anvogue
          </Link>
          <nav className="hidden lg:flex items-center space-x-6 text-sm">
            {menu.length
              ? menu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className={`text-foreground/60 hover:text-foreground transition-colors relative py-2 uppercase
                  ${pathname === item.url ? "text-foreground" : ""}
                  ${pathname === item.url ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-foreground" : ""}
                `}
                  >
                    {item.title}
                  </Link>
                ))
              : null}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Search className="h-5 w-5 hidden lg:block" />
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <Heart className="h-5 w-5 hidden lg:block" />
            <div className="relative hidden lg:block">
              <ShoppingCart className="h-5 w-5" />
              <span className="w-3.5 h-3.5 text-center absolute -right-2 mx-auto -top-1 rounded-full bg-black text-white text-[10px]">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
