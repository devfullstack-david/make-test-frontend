"use client"
import Welcome from "@/components/general/Welcome";
import { useSession } from "@/hooks/useSession";

export default function Home() {
  const { isLoggedIn } = useSession();
  return (
    <div>
      <main>
        {isLoggedIn ? (
          <div>
            esta logado
          </div>
        ) : (
          <div>
            <Welcome />
          </div>
        ) }
      </main>
    </div>
  );
}
