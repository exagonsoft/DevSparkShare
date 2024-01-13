import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex flex-center flex-col">
      <h1 className="head_text text-center">
        Share Your Spark
        <br className="min-md:hidden" />
        <span className="orange_gradient text-center">
          To Light the AI Fire
        </span>
      </h1>
      <p className="desc text-center">
        DevSparkShare is a collaborative platform for developers to share
        outstanding prompts, solve real-world issues, and earn tokens for
        impactful contributions. Built with Next.js and powered by web3
        technology.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
