import Bottomer from "@/components/Bottomer";
import Community from "@/components/Community";
import FeaturedEvents from "@/components/FeaturedEvents";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedEvents />
      <Community />
      <Partners />
      <Team />
      <Bottomer />
    </div>
  );
}
