"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();

  return (
    <div>
      hello
      {/* <Link href="/signin">sign in</Link> */}
      <button onClick={() => router.push("/signin")}>sign in</button>
    </div>
  );
}

export default page;
