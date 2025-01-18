import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-neon-blue hover:bg-white text-black shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <div className="bg-dark-100 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-dark-200 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 p-4">
            <div className="text-gray-400 text-center">
              Our support team is here to help! Please leave a message.
            </div>
          </div>
          <div className="p-4 border-t border-gray-800">
            <Input
              placeholder="Type your message..."
              className="mb-2"
            />
            <Button className="w-full bg-neon-blue text-black hover:bg-white">
              Send Message
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;