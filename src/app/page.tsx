import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../components/Slider"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-full bg-white -mt-8 -mx-4">
      <Slider />
    </main>
  )
}
