import { loadAndGetCorrectDictionary, Locale } from "@/utils/i18n";
import { dictionaries } from "./_dictionaries";
import Link from "next/link";
import Image from "next/image";

export default async function NotFound({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await loadAndGetCorrectDictionary(locale, dictionaries);

  return (
    <div className="min-h-screen bg-[#0A0F08] text-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 max-w-md">
        <p className="text-white/70 font-light text-base">
          {dictionary.message}
        </p>

        <Image
          src="/not-found.svg"
          alt="404 Not Found"
          width={400}
          height={300}
          className="mx-auto"
        />

        <Link
          href="/"
          className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white hover:text-white transition-all text-center font-medium"
        >
          {dictionary.button}
        </Link>
      </div>
    </div>
  );
}
