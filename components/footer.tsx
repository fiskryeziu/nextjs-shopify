import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  PinIcon as Pinterest,
  CreditCard,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Anvogue</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-bold">Email:</span> hi.author@gmail.com
              </p>
              <p>
                <span className="font-bold">Phone:</span> 1-555-555-0868
              </p>
              <p className="max-w-[200px]">
                <span className="font-bold">Address:</span> 345 Lake St Crystal
                Lake, IL 60014
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Orders & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Men
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Clothes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Customer Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Orders FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Return & Refund
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-sm">
              Sign up for our newsletter and get 10% off your first purchase
            </p>
            <form className="flex gap-2 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border px-3 py-2 text-sm"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-black px-2.5 py-1.5 text-sm text-white hover:bg-gray-800 absolute right-1"
              >
                <ArrowRight />
              </button>
            </form>

            <div className="mt-8 flex justify-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Pinterest className="h-6 w-6" />
                <span className="sr-only">Pinterest</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 hidden sm:block">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p className="text-primary/60">
              © 2025 Anvogue. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <p>Payment:</p>
              {Array.from({ length: 6 }).map((_, idx) => (
                <CreditCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
