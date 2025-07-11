import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const WhatsAppFloat: React.FC = () => (
  <a
    href="https://wa.me/15165432052"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp J.A. Fernandez Electric"
    className="fixed z-50 bottom-6 right-6 rounded-full shadow-lg p-4 flex items-center justify-center transition-all focus:outline-accent
      bg-accent text-primary hover:bg-accent/90
      dark:bg-primary dark:text-accent dark:hover:bg-primary/80"
  >
    <ChatBubbleLeftRightIcon className="w-7 h-7" />
    <span className="sr-only">WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
