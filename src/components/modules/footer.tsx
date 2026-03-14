import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = [
  { title: "আমাদের সম্পর্কে", href: "/about" },
  { title: "কোর্সসমূহ", href: "/courses" },
  { title: "প্রবন্ধ ও রচনা", href: "/article" },
  { title: "সাধারণ জিজ্ঞাসা", href: "contact" },
];

const FooterComponent = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-4">
        {/* Column 1: Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
        >
          <div className="shrink-0">
            <div className="w-80 h-56 -mt-3 flex items-center justify-center">
              <img src="../logo.png" alt="logo" />
            </div>
          </div>
        </motion.div>

        {/* Other Columns */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full md:w-auto">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              প্রয়োজনীয় লিংক
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="relative text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              সহযোগিতা
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ইমেইল: annahdaislamicinstitute@gmail.com
            </p>
            <Link to={"tel: +8801350055192"}>
              <p className="text-gray-600 dark:text-gray-400">+8801350055192</p>
            </Link>
          </motion.div>

          {/* Other Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
          >
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-white">
              অন্যান্য
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">ব্রহ্ম</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              নিবন্ধন করবেন যেভাবে
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
