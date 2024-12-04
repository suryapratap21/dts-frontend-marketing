import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";
import "react-rangeslider/lib/index.css";

import "@/assets/css/animate.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/flaticon-set.css";

import "@/assets/css/nice-select.css";
import "@/assets/css/validnavs.css";
import "@/assets/css/helper.css";
import "@/assets/css/unit-test.css";
import "@/assets/css/style.css";

import Dependency from "@/components/utilities/Dependency";
import { ToastContainer } from "react-toastify";
import { Manrope, Outfit } from "next/font/google";
import Contexts from "./contexts";
import GlobalDialog from "./GlobalDialog";

const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "DrugTestingSites - Your partner for all drug testing needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.className}`}>
        <ToastContainer />
        <Dependency />
        <Contexts>
          <GlobalDialog />
          {children}
        </Contexts>
      </body>
    </html>
  );
}
