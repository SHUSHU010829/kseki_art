import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container flex flex-row flex-wrap px-6 py-8 mx-auto 2xl:px-32 lg:px-12 lg:pb-24">
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}
