"use client"
import { useState } from "react";

export default function Home() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {isLogged ? (
          <div>
            não esta logado
          </div>
        ) : (
          <div>
            Esta logado
          </div>
        ) }
      </main>
    </div>
  );
}
