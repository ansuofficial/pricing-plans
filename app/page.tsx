import ChoosePlans from "@/components/choosePlans";
import { FaCircleCheck } from "react-icons/fa6";

async function getCartData() {
  const response = await fetch("https://pricing-plans-backend.onrender.com", {
    next: { revalidate: 500 },
  });
  const result = await response.json();

  return result;
}

export default async function Home() {
  const pricingPlans = await getCartData();
  console.log("Main price is: ", pricingPlans);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-12">
      <main className="mt-12">
        <div>
          <h1 className="font-roboto-slad md:text-7xl text-4xl text-center tracking-wider uppercase font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-700 to-white md:p-4">
            Pricing Plans
          </h1>
        </div>
        <div className="max-w-3xl mx-auto font-lora md:text-lg text-center p-4 text-slate-400">
          <p>
            This project is designed to develop and manage a comprehensive
            pricing plan system, offering various tiers and features to cater to
            different customer needs and business scales.
          </p>
        </div>
        <ChoosePlans plan={pricingPlans} />

        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 place-items-center gap-x-6 my-12">
            {pricingPlans.map((plan: any) => {
              return (
                <div
                  key={plan.name}
                  className={`ring-1 ring-slate-900 rounded-md text-center py-6 px-4 w-full flex flex-col justify-between ${
                    plan.name === "Premium Plan"
                      ? "bg-white lg:h-[600px] h-[500px]"
                      : "bg-black h-[500px]"
                  }`}
                >
                  <div>
                    <h4
                      className={`${
                        plan.name === "Premium Plan"
                          ? "text-black"
                          : "text-white"
                      } uppercase font-semibold font-roboto-slad`}
                    >
                      {plan.name}
                    </h4>
                    <div className="flex items-center justify-center my-6 gap-x-2">
                      <p
                        className={`${
                          plan.name === "Premium Plan"
                            ? "text-black"
                            : "text-white"
                        } text-3xl font-bold text-center font-number`}
                      >
                        D {plan.price}
                      </p>
                      <span
                        className={`${
                          plan.name === "Premium Plan"
                            ? "text-black"
                            : "text-white"
                        } font-lora uppercase`}
                      >
                        {plan.billingCycle}
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <ul className="font-lora space-y-4">
                        {plan.features.map((feature: any) => {
                          return (
                            <li
                              className={`${
                                plan.name === "Premium Plan"
                                  ? "text-black"
                                  : "text-slate-200"
                              }  flex items-center gap-x-2`}
                            >
                              <FaCircleCheck /> {feature}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <button className="font-lora ring-1 ring-slate-900 py-4 px-12 bg-black uppercase font-bold text-sm text-white rounded-sm">
                      get started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
