"use client";
import { useRouter } from "next/router";

const RedirectButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/yadoran')
      }}
    >
      Trocar de página
    </button>
  )
}

export default RedirectButton;