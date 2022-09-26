import { Disclosure } from "../../../node_modules/@headlessui/react/dist/index.js";
import { HiChevronUp } from "react-icons/hi";
export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is your refund policy?",
      answer: `If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.`,
    },
    {
      id: 2,
      question: "How long does it take to get my order?",
      answer: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`,
    },
    {
      id: 3,
      question: "Do you offer technical support?",
      answer: `No.`,
    },
    {
      id: 4,
      question: "How much is shipping?",
      answer: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`,
    },
    {
      id: 5,
      question: "How do I contact support?",
      answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
    },
  ];
  return (
    <div
      className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12 select-none"
      id="faq"
    >
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Frequently asked questions
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="flex flex-col max-w-screen-sm mx-auto">
          {faqs.map((faq) => (
            <Disclosure key={faq.key}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between text-black dark:text-gray-500 hover:text-indigo-500 dark:hover:text-gray-200 active:text-indigo-600 cursor-pointer gap-2 py-4">
                    <span className="md:text-lg font-semibold transition duration-100">
                      {faq.question}
                    </span>
                    <HiChevronUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-6 w-6`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 dark:text-gray-300 mb-4">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          {/* <div className="border-b">
            <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
              <span className="md:text-lg font-semibold transition duration-100">
                Is support available?
              </span>

              <span className="text-indigo-500 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>

            <p className="text-gray-500 mb-4">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
