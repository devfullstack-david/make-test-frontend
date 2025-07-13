"use client"
import Welcome from "@/components/general/Welcome";
import HomeApp from "@/components/home/HomeApp";
import { useSession } from "@/hooks/useSession";

export default function Home() {
  const { isLoggedIn } = useSession();
  return (
    <div>
      <main>
        {isLoggedIn ? (
          <HomeApp />
        ) : (
          <div>
            <Welcome />
          </div>
        ) }
      </main>
    </div>
  );
}
