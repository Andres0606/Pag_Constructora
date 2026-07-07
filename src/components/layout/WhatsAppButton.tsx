import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573106392432"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 animate-bounce"
      style={{ animationDuration: "3s" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-white text-white" />
    </a>
  );
}
