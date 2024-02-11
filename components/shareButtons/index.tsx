"use client";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

const ShareButton = ({ slug }: { slug: string }) => {
  const handleShare = (media: "facebook" | "whatsapp") => {
    const domain = window.location.origin;
    const url = `${domain}/barang/${slug}`;

    if (media === "facebook") {
      // Bagikan ke Facebook
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      window.open(facebookShareUrl, "_blank");
    } else if (media === "whatsapp") {
      // Bagikan ke WhatsApp
      const whatsappShareUrl = `whatsapp://send?text=${encodeURIComponent(
        url
      )}`;
      window.open(whatsappShareUrl, "_blank");
    }
  };

  return (
    <div className="flex items-center space-x-4 border rounded-full p-1">
      <p className="text-xs">Bagikan</p>

      {/* facebook */}
      <AiOutlineFacebook
        className="text-xl md:text-2xl cursor-pointer"
        onClick={() => {
          handleShare("facebook");
        }}
      />

      {/* whatsapp */}
      <FaWhatsapp
        className="text-xl md:text-2xl cursor-pointer"
        onClick={() => {
          handleShare("whatsapp");
        }}
      />
    </div>
  );
};

export default ShareButton;
