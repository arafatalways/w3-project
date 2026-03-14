import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface SocialLinkItem {
  icon: React.ReactNode;
  href: string;
  color: string;
}

const socialLinks: SocialLinkItem[] = [
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/message/TKY5YZPN43KWF1",
    color: "bg-[#21C063] hover:bg-[#21C063]",
  },
  {
    icon: <FaFacebook size={18} />,
    href: "https://www.facebook.com/share/v/1CMRsUUbe9/",
    color: "bg-[#0866FF] hover:bg-[#0866FF]",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "https://twitter.com",
    color: "bg-[#FF0033] hover:bg-[#FF0033]",
  },
  {
    icon: <MdEmail size={18} />,
    href: "annahdaislamicinstitute@gmail.com",
    color: "bg-[#FBBC04] hover:bg-[#FBBC04]",
  },
];

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-[#262E40]">
      <div className="my-container text-center">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("contact_title", "যোগাযোগ")}
        </h1>

        {/* SUBTITLE */}
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16">
          {t(
            "contact_desc",
            "যেকোনো প্রয়োজনে, জিজ্ঞাসা, মতামত কিংবা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা ইনশাআল্লাহ দ্রুত উত্তর দেওয়ার চেষ্টা করবো।",
          )}
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* PHONE */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="w-8 h-8 text-indigo-600 mb-4" />

            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("phone", "মোবাইল")}
            </h3>
            <Link to={"tel: +8801350055192"}>
              <p className="text-gray-600 dark:text-gray-400">+8801350055192</p>
            </Link>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center">
            <MdMarkEmailUnread className="w-8 h-8 text-[#FBBC04] mb-4" />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("email", "ইমেইল")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              annahdaislamicinstitute@gmail.com
            </p>
          </div>

          {/* WEBSITE */}
          <div className="flex flex-col items-center">
            <CgWebsite className="w-8 h-8 text-[#005484] mb-4" />
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
              {t("website", "ওয়েবসাইট")}
            </h3>
            <Link
              to="https://c2-noman-ia6o.vercel.app/"
              className="text-indigo-600 hover:underline"
            >
              https://c2-noman-ia6o.vercel.app/
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-white shadow-md transition ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <h3 className="font-semibold text-lg my-5 text-gray-800 dark:text-gray-200 mb-4">
              {t("social", "সোশ্যাল মিডিয়া")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
