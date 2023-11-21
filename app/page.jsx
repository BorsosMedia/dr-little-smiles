import Script from "next/script";

import About from "../components/About";
import Cavities from "../components/Cavities";
import Factors from "../components/Factors";
import Hero from "../components/Hero";
import Prevention from "../components/Prevention";
import Reviews from "../components/Reviews";
export default function Home() {
  return (
    <main className="bg-light-grey">
      <Hero />
      <div
        suppressHydrationWarning
        className="form-mobile w-full px-[10vw] lg:col-span-2 lg:col-start-2 lg:px-0"
      >
        <h6
          style={{
            color: "#333333",
            textAlign: "center",
          }}
          className="subheadline"
        >
          Start Caring Now
        </h6>
        <p
          style={{
            color: "#333333",
            textAlign: "center",
          }}
        >
          Sign up to get the latest teeth tips & tricks!
        </p>
        <div>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/K6DO8k1YbVqtK4L2mPoH"
            style={{
              width: "100%",
              maxWidth: "400px",

              border: "none",
            }}
            className="form-iframe"
            id="inline-K6DO8k1YbVqtK4L2mPoH"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 1"
            data-height="430"
            data-layout-iframe-id="inline-K6DO8k1YbVqtK4L2mPoH"
            data-form-id="K6DO8k1YbVqtK4L2mPoH"
            title="Form 1"
          ></iframe>
          <Script
            async
            src="https://link.msgsndr.com/js/form_embed.js"
          ></Script>
        </div>
      </div>
      <About />
      <Cavities />
      <Prevention />
      <Factors />
      <Reviews />
    </main>
  );
}
