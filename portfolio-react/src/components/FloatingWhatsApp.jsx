import { socialLinks } from "../data/socialLinks";

export default function FloatingWhatsApp() {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener"
      title="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-[200] w-[52px] h-[52px] rounded-full bg-[#25d366] text-white flex items-center justify-center no-underline text-2xl shadow-[0_4px_20px_rgba(37,211,102,.45)] hover:scale-110 hover:shadow-[0_8px_28px_rgba(37,211,102,.55)] transition-transform animate-fadeIn [animation-delay:2s]"
    >
      <img
        src="/assets/images/whatsapp.png"
        alt=""
        className="w-12 h-12 object-contain"
      />
    </a>
  );
}
