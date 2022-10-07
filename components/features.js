import Container from "./container";

export default function Features() {
  return (
    <div id="features">
      <Container className="flex items-center ">
        <div className="text-center">
          <h2 className="text-6xl lg:text-8xl text-title font-extrabold leading-snug tracking-tight lg:leading-tight xl:text-6xl xl:leading-tight">
            Network Features
          </h2>
          <div className="mt-8 text-xl leading-normal w-full lg:w-2/3 mx-auto ">
            User-friendly and feature-rich wallet released as an application for
            mobile devices The most simple solution to receive and sent funds.
            You will only need an e-mail to get started
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-10">
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img src="/img/" alt="Limit Oders" className="h-28 mx-auto" />
              <div className="text-2xl font-semibold">Limit Oders</div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img src="/img/" alt="NFTs" className="h-28 mx-auto" />
              <div className="text-2xl font-semibold">NFTs</div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img src="/img/" alt="Crypto Loans" className="h-28 mx-auto" />
              <div className="text-2xl font-semibold">Crypto Loans</div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img src="/img/" alt="Smart Contracts" className="h-28 mx-auto" />
              <div className="text-2xl font-semibold">Smart Contracts</div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img
                src="/img/"
                alt="Fully Decentralized"
                className="h-28 mx-auto"
              />
              <div className="text-2xl font-semibold">Fully Decentralized</div>
            </div>
            <div className="bg-default-600 rounded-3xl p-5 text-center hover:bg-default-500">
              <img
                src="/img/"
                alt="Cross-Chain Sway"
                className="h-28 mx-auto"
              />
              <div className="text-2xl font-semibold">Cross-Chain Sway</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
