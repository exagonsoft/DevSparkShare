import Link from "next/link";

export const metadata = {
  title: "DevSparkShare",
  description: "Share your Spark to empower the AI Fire",
};

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Link
        className="absolute sm:left-0 left-4 top-4 py-2 px-6 bg-green-500 text-white rounded-lg hover:shadow-lg transitions"
        href={"/"}
      >
        Back Home
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;
