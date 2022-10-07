import Container from "./container";

export default function Roadmap() {
  return (
    <div id="roadmap">
      <Container className="flex items-center ">
        <div className="text-center">
          <h2 className="text-6xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight show-animate-to-bottom">
            Roadmap
          </h2>
          <div className="mt-8 text-xl leading-normal w-full lg:w-2/3 mx-auto show-animate-to-bottom">
            In light of the changes that leading blockchains have recently made
            in their tokenomics, OCTOPUS Team is proposing a large-scale update
            of the network. It goal is to improve the economic mode and
            implement deflationary
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10 show-animate-fade-in">
            <div className="text-before">
              <span className="circle-text relative text-2xl font-semibold">
                Token Burn
              </span>
              <div className="circle relative mt-20 mx-auto w-48 h-48 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-5xl leading-normal">
                  NOV 2021
                </span>
              </div>
            </div>
            <div className="text-after mt-10 lg:mt-0">
              <span className="circle-text lg:hidden relative text-2xl font-semibold">
                OCTOPUS Wallet
              </span>
              <div className="circle relative mt-20 lg:mt-52 mx-auto mb-10 lg:mb-20 w-48 h-48 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-5xl leading-normal">
                  NOV 2021
                </span>
              </div>
              <span className="hidden lg:block circle-text relative text-2xl font-semibold">
                OCTOPUS Wallet
              </span>
            </div>
            <div className="text-before">
              <span className="circle-text relative text-2xl font-semibold">
                Smart Contracts
              </span>
              <div className="circle relative mt-20 mx-auto w-48 h-48 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-5xl leading-normal">
                  NOV 2021
                </span>
              </div>
            </div>
            <div className="text-after mt-10 lg:mt-0">
              <span className="circle-text lg:hidden relative text-2xl font-semibold">
                Pinpon Release
              </span>
              <div className="circle relative mt-20 lg:mt-52 mx-auto mb-10 lg:mb-20 w-48 h-48 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-5xl leading-normal">
                  NOV 2021
                </span>
              </div>
              <span className="hidden lg:block circle-text relative text-2xl font-semibold">
                Pinpon Release
              </span>
            </div>
            <div className="text-before">
              <span className="circle-text relative text-2xl font-semibold">
                Crypto Loans
              </span>
              <div className="circle relative mt-20 mx-auto w-48 h-48 rounded-full flex justify-center items-center bg-gradient-roadmap">
                <span className="font-extrabold text-5xl leading-normal">
                  NOV 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
