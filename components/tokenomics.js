/* eslint-disable @next/next/no-img-element */
import Container from "./container";

export default function Tokenomics() {
  return (
    <div id="tokenomics">
      <Container className="flex flex-wrap">
        <div className="w-full mx-auto">
          <h1 className="text-4xl text-center font-bold leading-snug tracking-tight lg:text-6xl lg:leading-tight xl:leading-tight mb-5 md:mb-10">
            Tokenomics
          </h1>
          <div className="grid lg:grid-cols-3 w-full lg:w-2/3 mx-auto">
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/TOTAL_SUPPLY.svg"
                  alt="TOTAL SUPPLY"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>TOTAL SUPPLY</div>
            </div>
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/TOKENS_FOR_PRESALE.svg"
                  alt="TOKENS FOR PRESALE"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>TOKENS FOR PRESALE</div>
            </div>
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/TOKEN_FOR_LIQUIDITY.svg"
                  alt="TOKEN FOR LIQUIDITY"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>TOKEN FOR LIQUIDITY</div>
            </div>
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/PRESALE_RATE.svg"
                  alt="PRESALE RATE"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>PRESALE RATE</div>
            </div>
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/LISTING_RATE.svg"
                  alt="LISTING RATE"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>LISTING RATE</div>
            </div>
            <div className="p-5 text-center">
              <div className="bg-default-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                <img
                  src="/img/PRESALE_RATE2.svg"
                  alt="PRESALE RATE"
                  className="w-12"
                />
              </div>
              <div className="font-bold">UPDATING</div>
              <div>PRESALE RATE</div>
            </div>
          </div>
          <div className="grid gap-x-10 bg-default-400 p-2 rounded-md lg:grid-cols-2 w-full mx-auto mt-10 lg:mt-20">
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">INITIAL MARKET CAP (ESTIMATE)</div>
              <div className="text-right px-4">UPDATING</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">PRESALE END TIME</div>
              <div className="bg-default-400 text-right px-4">UPDATING</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">SOFT CAP</div>
              <div className="bg-default-400 text-right px-4">100BNB</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">LISTING ON</div>
              <div className="bg-default-400 text-right px-4">PANCAKESWAP</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">HARD CAP</div>
              <div className="bg-default-400 text-right px-4">
                NOT AVAILABLE
              </div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 border-white p-2">
              <div className="font-bold">LIQUIDITY PERCENT</div>
              <div className="bg-default-400 text-right px-4">51%</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto border-b-2 lg:border-none border-white p-2">
              <div className="font-bold">PRESALE START TIME</div>
              <div className="bg-default-400 text-right px-4">UPDATING</div>
            </div>
            <div className="grid gap-5 grid-cols-2 w-full mx-auto p-2">
              <div className="font-bold">LIQUIDITY LOCKUP TIME</div>
              <div className="bg-default-400 text-right px-4">
                90 DAYS AFTER POOL ENDS
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
