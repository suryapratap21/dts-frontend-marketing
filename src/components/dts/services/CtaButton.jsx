import { useRouter } from "next/navigation";
import React from "react";

const CtaButton = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.push("/pricing/drug-test")}>
      Purchase Now
    </button>
  );
};

export default CtaButton;
