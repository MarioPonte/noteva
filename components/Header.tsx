"use client";

import Image from "next/image";

export function Header() {
    return (
        <div className="p-2">
            <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </div>
    )
}