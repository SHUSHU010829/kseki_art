"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { AlertDestructive } from "@/components/alert/destructive";


// TODO 標題 & 大綱 & 閱讀須知 & 碎碎念
const FormSchema = z.object({
  content: z
    .string()
    .min(200, {
      message: "文章至少超過 200 字，才能發布喔！",
    })
    .max(200000, {
      message: "文章不能超過 200,000 字（覺得不太夠，可以填寫表單跟開發者說，可以做調整！）",
    }),
});

export function NewPost() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "作品已發布！",
      description: (
        // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        // </pre>
        <div>謝謝您的創作 ✨</div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea placeholder="" className=" bg-white" {...field} />
              </FormControl>
              <FormDescription>字數限定 200,000 字。</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDestructive
          title="警語"
          description="為了防止各位的心血突然消失，請記得備份所有創作!!! 本平台不付保管責任，謝謝。"
        />
        <Button type="submit">發布</Button>
      </form>
    </Form>
  );
}
