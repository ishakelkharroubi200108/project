// app/components/Footer.tsx
import {Link} from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-6">
      {/* Top Section */}
      <div className=" container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-100 mb-4">
              We connect schools with the tools they need to deliver exceptional
              education experiences.
            </p>
            <Link to="/signup-partner">
              <button className="mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-sm transition">
                Become a Partner
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/schools" className="hover:text-white transition">
                  Find Your School
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white transition">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery-info"
                  className="hover:text-white transition"
                >
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link
                  to="/returns-policy"
                  className="hover:text-white transition"
                >
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: support@example.com</li>
              <li>Phone: +1 (234) 567-8901</li>
              <li>Address: 123 Education Street, New York, NY 10001</li>
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <form className="flex flex-col space-y-2 mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="flex">
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-white border-blue-500 border-1"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 p-2 ml-[-5%] rounded-r-md transition"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="flex space-x-4">
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-200">
          <span>
            &copy; {new Date().getFullYear()} Created at 2025. All rights
            reserved.
            <span className="inline-flex justify-center pl-1 pr-3 space-x-1 mt-2">
              <Link
                to="/terms"
                className="hover:text-white transition underline"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="hover:text-white transition underline"
              >
                Privacy Policy
              </Link>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
