import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-2 md:px-6">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm"
        >
          If you have any questions, feel free to chat with me directly on my
          social media.
        </motion.p>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-medium text-2xl text-amber-500 dark:text-amber-300 mt-5 mb-5"
        >
          <Reveal width="100%">Contact details</Reveal>
        </motion.h2>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-x-auto rounded-xl  shadow-lg shadow-gray-400/50 dark:shadow-black/30  mb-5"
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-neutral-100 dark:bg-neutral-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-neutral-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email
                </th>
                <td className="px-6 py-4">
                  <a
                    href="mailto:himanshuchandolaofficial@gmail.com"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800 flex items-center"
                  >
                    himanshuchandolaofficial@gmail.com{" "}
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm mb-5"
        >
          If you need any further information, such as my phone number, please
          do not hesitate to send me an email first.
        </motion.p>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-medium text-2xl text-amber-500 dark:text-amber-300 mt-5 mb-5"
        >
          <Reveal width="100%">Important Links</Reveal>
        </motion.h2>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-extralight text-sm mb-5"
        >
          Leaving some important links to my Socials here, feel free to contact
          me on any of them.
        </motion.p>

        {/* Address table */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-x-auto rounded-xl  shadow-lg shadow-gray-400/50 dark:shadow-black/30  mb-8"
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-neutral-100 dark:bg-neutral-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Social Media
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile URL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100/30 border-b dark:bg-[#101111]/30 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Linkedin
                </th>
                <td className="px-6 py-4">
                  <a
                    href="https://www.linkedin.com/in/himanshuchandola/"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800  flex items-center"
                  >
                    linkedin.com/in/himanshuchandola
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>

              <tr className="bg-white border-b dark:bg-neutral-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Github
                </th>
                <td className="px-6 py-4">
                  <a
                    href="https://github.com/himanshuchandola"
                    className="font-normal text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-800  flex items-center"
                  >
                    github.com/himanshuchandola
                    <span className="ml-1">
                      <BiLinkExternal />
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDetails;
