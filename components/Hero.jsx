"use client";
import Script from "next/script";
import Image from "next/image";
import logo from "../public/assets/logo-white.svg";
const Hero = () => {
  return (
    <>
      <article className="bg-hero">
        <section className="col-span-2 pl-[10vw] md:place-content-center md:py-[17.3611%] md:pl-[10vw]">
          <Image src={logo} alt="logo" className="h-24 w-24 lg:h-48 lg:w-48" />
          <h1 className="headline font-montserrat md:hidden">
            <span className="text-effect-mobile">
              Caring <span className="whitespace-nowrap">for the</span> Smiles
              that Matter Most
            </span>
          </h1>
          <h1 className="headline hidden md:block">
            <span className="text-effect-desktop">
              <span className="whitespace-nowrap">Caring for the Smiles</span>
              <br />
              <span className="whitespace-nowrap">that Matter Most</span>
            </span>
          </h1>
          <div className="newsletter-form">
            <h6
              style={{
                color: "#ffffff",
              }}
              className="subheadline"
            >
              Start Caring Now
            </h6>
            <p
              style={{
                color: "#ffffff",
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
                suppressHydrationWarning
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
        </section>
      </article>
    </>
  );
};

export default Hero;
