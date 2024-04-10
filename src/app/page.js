"use client";

import Link from "next/link";
import Nav from "../components/navbar";
import Landingpage from "@/components/landingpage";
import Footer from "@/components/footer";

function Home() {
  return (
    <div>
      <body>
        <Landingpage />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
