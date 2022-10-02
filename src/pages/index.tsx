import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-full w-screen bg-[#1d1f2b] px-[10%] min-h-[80vh]">
      <Head>
        <title>Coders NFT</title>
      </Head>
      <div className="flex justify-between items-baseline flex-wrap">
        <h2 className="text-5xl font-bold mt-24">Discover</h2>
        <input placeholder="Search item" className="h-12 w-64 p-4 rounded-xl" />
      </div>
      <hr className="w-full border-[#242634] mt-12" />
      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>
        <div className="flex flex-wrap items-start gap-7 mt-7 min-h[50%]" />
      </div>
      <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]" />
    </div>
  );
}
