import { Suspense } from "react";

import { Skeleton } from "./ui/skeleton";

const Newsletter = ({ inHero }) => {
  return (
    <div
      suppressHydrationWarning
      className={`${
        inHero ? "hidden lg:block" : "lg:hidden"
      } newsletter w-full px-[10vw] lg:col-span-2 lg:col-start-2 lg:px-0`}
    >
      <h6 className="subheadline lg:white text-center text-black lg:text-left">
        Start Caring Now
      </h6>
      <p className="lg:white text-center text-black lg:text-left">
        Sign up to get the latest teeth tips & tricks!
      </p>
      <div>
        <Suspense
          fallback={
            <Skeleton
              className={`absolute w-full max-w-[400px] ${
                inHero ? "h-full" : "h-[99px]"
              }`}
            />
          }
        >
          <iframe
            suppressHydrationWarning
            src="https://api.leadconnectorhq.com/widget/form/K6DO8k1YbVqtK4L2mPoH"
            style={{
              width: "100%",
              maxWidth: "400px",
              border: "none",
              height: `${inHero ? "100%" : "99px"}`,
              overflow: "hidden",
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
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Newsletter;
