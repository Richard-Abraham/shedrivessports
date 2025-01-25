import {  Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-0">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/Original__1_-removebg-preview.png"
                alt="SheDrivesSports Logo"
                className="h-16 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-white">She Drives Sports</span>
            </div>
            <p className="text-sm">
              Empowering women in sports leadership through education, mentorship, and networking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-purple-400 transition-colors">Programs</a></li>
              <li><a href="#impact" className="hover:text-purple-400 transition-colors">Impact Stories</a></li>
              <li><a href="#team" className="hover:text-purple-400 transition-colors">Our Team</a></li>
              <li><a href="#get-involved" className="hover:text-purple-400 transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@shedrivesports.com" className="hover:text-purple-400 transition-colors">
                  info@shedrivesports.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SheDrives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 