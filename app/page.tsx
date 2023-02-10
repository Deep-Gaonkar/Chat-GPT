import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">Chat-GPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Example</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">&#34;Explain Something to me&#34;</p>
            <p className="infoText">
              &#34;What is the difference between a dog and a cat&#34;
            </p>
            <p className="infoText">&#34;What is the color of the sum!&#34;</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the GPT model to use</p>
            <p className="infoText">
              Messages are stores in Firebase Firestore
            </p>
            <p className="infoText">
              Hot toast notification when ChatGPT is thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events arter 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
