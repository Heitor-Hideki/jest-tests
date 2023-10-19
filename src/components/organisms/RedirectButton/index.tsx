"use client";
import { useRouter } from "next/navigation";

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