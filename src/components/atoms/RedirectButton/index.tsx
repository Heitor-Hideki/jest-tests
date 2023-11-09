"use client";
import { useRouter } from "next/navigation";

interface IRedirectButton {
  pageName: string;
}

const RedirectButton = ({
  pageName
}: IRedirectButton) => {
  const router = useRouter();

  return (
    <button
      className="px-3 py-2 bg-yellow-50 rounded-md font-semibold"
      onClick={() => {
        router.push(`/${pageName}`)
      }}
    >
      Navegar para {pageName}
    </button>
  )
}

export default RedirectButton;