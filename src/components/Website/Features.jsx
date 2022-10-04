import Card from "./elements/FeatureCard";
import CardRow from "./elements/FeatureRow";
import { FiCloud, FiLock, FiZap } from "react-icons/fi/index.js";
export default function Features() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 dark:text-gray-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our competitive advantage
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <CardRow>
            <Card
              title="Security"
              description="Filler text is dummy text which has no meaning however looks
                very similar to real text."
              icon={<FiLock className="w-full h-full" />}
            />
            <Card
              title="Cloud"
              description="Filler text is dummy text which has no meaning however looks
                very similar to real text."
              icon={<FiCloud className="w-full h-full" />}
            />
            <Card
              title="Fast"
              description="Filler text is dummy text which has no meaning however looks
                very similar to real text."
              icon={<FiZap className="w-full h-full" />}
            />
          </CardRow>
        </div>
      </div>
    </>
  );
}
