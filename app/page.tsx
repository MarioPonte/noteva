"use client";

import Tiptap from "@/components/Tiptap";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      editor: "",
    }
  })
  return (
    <section>
      <form>
        <h1 className="text-3xl text-center mb-10">
          Noteva
        </h1>
        <Tiptap/>
      </form>
    </section>
  );
}
