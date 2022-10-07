/* eslint-disable @next/next/no-img-element */
import Container from "./container";

export default function Tokenomics() {
  return (
    <div id="tokenomics">
      <Container className="flex items-center mb-20 show-animate-fade-in">
        <div className="text-center w-full">
          <h2 className="text-6xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight">
            Tokenomics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-20 show-animate-to-right">
            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/wallet.png"
                    alt="TOTAL SUPPLY"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">TOTAL SUPPLY</div>
                <div className="text-xl font-bold">1,000,000,000 prophet</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/dollar.png"
                    alt="TOKENS FOR RESALE"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">
                  TOKENS FOR RESALE
                </div>
                <div className="text-xl font-bold">605,000,000,000 prophet</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/flash.png"
                    alt="TOKEN FOR LIQUIDITY"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">
                  TOKEN FOR LIQUIDITY
                </div>
                <div className="text-xl font-bold">344,850,000,570 prophet</div>
              </div>
            </div>

            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/lightbulb.png"
                    alt="PRESALE RATE"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">PRESALE RATE</div>
                <div className="text-xl font-bold">
                  1 BNB = 1,210,000,000 prophet
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/star.png"
                    alt="LISTING RATE"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">LISTING RATE</div>
                <div className="text-xl font-bold">
                  1 BNB = 1,210,000,002 prophet
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-1 rounded-3xl text-center group">
              <div className="bg-bg py-20 rounded-3xl">
                <div className="absolute w-24 h-24 bg-gradient-icon rounded-2xl -top-12 left-11 flex justify-center items-center">
                  <img
                    src="/img/fire.png"
                    alt="PRESALE RATE"
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="text-2xl leading-relaxed">PRESALE RATE</div>
                <div className="text-xl font-bold">
                  1 BNB = 1,210,000,000 prophet
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 show-animate-to-bottom">
            <div className="relative bg-gradient-border p-0.5 text-left rounded-l-lg group">
              <div className="bg-bg p-3 rounded-l-lg ">
                <div className="font-bold">INITIAL MARKET CAP (ESTIMATE)</div>
                <div className="">$223,198</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left group">
              <div className="bg-bg p-3">
                <div className="font-bold">SOFT CAP</div>
                <div className="">250 BNB</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left group">
              <div className="bg-bg p-3">
                <div className="font-bold">HARD CAP</div>
                <div className="">500 BNB</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left rounded-r-xl group">
              <div className="bg-bg p-3 rounded-r-xl">
                <div className="font-bold">PRESALE START TIME</div>
                <div className="">2022.09.20 12:00 (UTC)</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 show-animate-to-bottom">
            <div className="relative bg-gradient-border p-0.5 text-left rounded-l-lg group">
              <div className="bg-bg p-3 rounded-l-lg ">
                <div className="font-bold">PRESALE END TIME</div>
                <div className="">2022.09.20 13:00 (UTC)</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left group">
              <div className="bg-bg p-3">
                <div className="font-bold">LISTING ON</div>
                <div className="">Pancakeswap</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left group">
              <div className="bg-bg p-3">
                <div className="font-bold">LIQUIDITY PERCENT</div>
                <div className="">60%</div>
              </div>
            </div>
            <div className="relative bg-gradient-border p-0.5 text-left rounded-r-xl group">
              <div className="bg-bg p-3 rounded-r-xl">
                <div className="font-bold">LIQUIDITY LOCKUP TIME</div>
                <div className="">99 DAYS AFTER POOL ENDS</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
