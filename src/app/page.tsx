"use client"
import Welcome from "@/components/general/Welcome";
import { useState } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <div>
      <main>
        {isLogged ? (
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
