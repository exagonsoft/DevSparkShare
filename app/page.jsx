import Feed from "@components/Feed";
import Nav from "@components/Nav";

const Home = () => {
  return (
    <div className="w-full">
      <Nav />
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
    </div>
  );
};

export default Home;
