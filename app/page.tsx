"use client";

import Tiptap from "@/components/Tiptap";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

export default function Home() {
  const formSchema = z.object({
    editor: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      editor: "",
    }
  })
  return (
    <section>
        <FormProvider {...form}>
          <form>
            <FormField
              control={form.control}
              name="editor"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Tiptap onChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </FormProvider>
    </section>
  );
}
