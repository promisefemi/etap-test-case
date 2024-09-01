import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: Readonly<{ children: ReactNode }>) {

    return <main className="p-4">
        <header className=" w-full flex justify-between items-center p-10">
            <Link href="/">
                <Image src="/image.avif" width="90" height="10" alt="Logo" />
            </Link>
            <button className="border-0 bg-red-100 text-red-600 text-sm font-semibold p-2 rounded-md">Log out</button>
        </header>

        {children}
    </main>
}