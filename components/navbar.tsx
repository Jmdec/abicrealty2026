"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { usePWA } from "../hooks/usePWA"; // Import the PWA hook
import GoogleTranslate from "../components/googleTranslate"; // Import Google Translate component

export const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const pathname = usePathname(); // Get the current route
  const { isInstallable, isInstalled, installApp } = usePWA(); // Use PWA hook

  // Check if we are on the "Room Planner" page
  const isRoomPlannerPage = pathname === "/room-planner";

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Close the sidebar when the route changes
  useEffect(() => {
    setSidebarOpen(false); // Close the sidebar on route change
  }, [pathname]);

  const handleRoomPlannerClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.getAttribute('href') === '/room-planner') {
      e.preventDefault();
      setModalOpen(true); // Open the modal when Room Planner is clicked
    }
  };

  const handleInstallAppClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    if (isInstallable) {
      installApp(); //Trigger the PWA installation
    }
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  const handleProceed = () => {
    // Logic for the "Proceed" button (opens the link in a new window)
    const roomPlannerUrl = '/room-planner'; // URL for the Room Planner page
    window.open(roomPlannerUrl, '_blank', 'noopener,noreferrer'); // Opens in a new tab
    setModalOpen(false); // Close the modal after proceeding
  };

  if (isRoomPlannerPage) return null; // Don't render Navbar on Room Planner page

  return (
    <main className="relative">
      {/* Navbar for small screens */}
      <div className="md:hidden flex items-center justify-between p-4 bg-violet-700 shadow-md sticky top-0 left-0 w-full z-50">
        <button
          aria-controls="logo-sidebar"
          aria-expanded={isSidebarOpen ? "true" : "false"}
          className="text-white focus:outline-none"
          type="button"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                fillRule="evenodd"
              />
            </svg>
          )}
        </button>
        <Link className="flex items-center" href="/">
          <Image
            alt="ABIC Logo"
            height={80}
            src="/abic-realty-logo.png"
            width={80}
          />
        </Link>
      </div>

      {/* Sidebar */}
      <aside
        aria-label="Sidebar"
        id="logo-sidebar"
        className={`
          fixed top-0 left-0 z-40
          h-screen w-64
          transform transition-transform duration-300 ease-in-out
          bg-cover bg-center bg-no-repeat
          dark:bg-gray-800
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div
          className="flex h-full flex-col px-3 py-4"
          style={{
            backgroundImage:
              "url('https://abicrealtyphdianne.com/media/abic-sidebar.png')",
          }}
        >
          
          {/* Logo */}
          <Link
            href="/"
            className="hidden md:flex items-center justify-center mb-6"
          >
            <Image
              src="/abic-realty-logo.png"
              alt="ABIC Logo"
              width={200}
              height={200}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1 font-medium">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/whatsnew", label: "What's New" },
                { path: "/properties", label: "Properties" },
                { path: "/services", label: "Services" },
                { path: "/careers", label: "Careers" },
                { path: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`
                      flex items-center rounded-lg px-3 py-2 text-white transition
                      ${
                        pathname === link.path
                          ? "bg-violet-800 font-semibold"
                          : "hover:bg-violet-700"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="my-4 border-t border-white/20" />

              {[
                { path: "/documents", label: "DMCI Documents" },
                { path: "/submit-property", label: "Submit Property" },
                { path: "/loancalculator", label: "Loan Calculator" },
                {
                  path: "/room-planner",
                  label: "Room Planner",
                  isRoomPlanner: true,
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={
                      link.isRoomPlanner ? handleRoomPlannerClick : undefined
                    }
                    className={`
                      flex items-center rounded-lg px-3 py-2 text-white transition
                      ${
                        pathname === link.path
                          ? "bg-violet-800"
                          : "hover:bg-violet-700"
                      }
                    `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Install App */}
              {isInstallable && !isInstalled && (
                <li className="mt-6">
                  <a
                    href="#"
                    onClick={handleInstallAppClick}
                    className="
                      flex w-full items-center justify-center gap-2
                      rounded-lg border-2 border-purple-500 px-4 py-3
                      text-purple-300 font-semibold transition
                      hover:border-purple-400 hover:text-purple-200
                      hover:shadow-[0_0_12px_rgba(168,85,247,0.6)]
                    "
                  >
                    <span>Install App</span>
                  </a>
                </li>
              )}

              {isInstalled && (
                <li className="flex items-center gap-2 text-green-300">
                  <span>✓</span>
                  <span>App Installed</span>
                </li>
              )}
            </ul>
          </nav>

          {/* Bottom Utilities */}
          <div className="space-y-4">
            <GoogleTranslate />

            {!isRoomPlannerPage && (
              <div>{/* Footer / Chatbot */}</div>
            )}
          </div>
        </div>
      </aside>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-red-100 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-xs md:max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Room Planner</h2>
            <p className="text-red-800 text-sm sm:text-base">This feature is optimized for larger screens. For the best experience, please use a device with a larger display.</p>
            <div className="mt-4 text-right space-x-4">
              <button
                className="px-4 py-2 bg-violet-700 text-white rounded-lg text-sm sm:text-base"
                onClick={handleModalClose}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-violet-700 text-white rounded-lg text-sm sm:text-base"
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
