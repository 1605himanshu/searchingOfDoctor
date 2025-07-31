'use client';
import SearchBar from '../app/components/SearchBar';
import PopularTags from '../app/components/PopularTags';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#2e2c91] text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-4xl font-bold mb-5 ">Your home for health</h1>
        <h2 className="text-xl mb-6 ">Find and Book</h2>
        <SearchBar />
        <PopularTags />
      </main>
      <Footer />
    </div>
  );
}
