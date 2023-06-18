import React from "react";
import { Button, Download, Feautures, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/global";
const App = () => {
  return (
    <div className="overflow-hidden">
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS , exchange & earn crypto. Join 25+ million people using ProNef Marketplaace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface  Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI Design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Feautures />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get yor app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}<span className="bold"> Arman Mesroyan</span></p>
      </div>
    </div>
  );
};

export default App;
