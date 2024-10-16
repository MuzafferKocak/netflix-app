import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] mb-3">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-2xl font-[400]">Watch anywhere. Cancel anytime</p>
          <Link href="/register">
            <button className="btn-danger w-[250px]">Get Started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
