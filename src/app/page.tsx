import dynamic from "next/dynamic";

const Slider = dynamic(() => import("../components/ui/Slider"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-full bg-white">
      <Slider />
    </main>
  )
}
