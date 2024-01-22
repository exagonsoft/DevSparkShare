import Nav from "@components/Nav";
import Link from "next/link";

export const metadata = {
  title: "DevSparkShare",
  description: "Share your Spark to empower the AI Fire",
};

const BoardLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Nav />
      {children}
    </div>
  );
};

export default BoardLayout;
