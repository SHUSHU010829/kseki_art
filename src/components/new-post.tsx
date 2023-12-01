"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { PiBookDuotone } from "react-icons/pi";
import { PiWarningFill } from "react-icons/pi";
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
import { toast, useToast } from "@/components/ui/use-toast";
import { AlertDestructive } from "@/components/alert/destructive";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const FormSchema = z.object({
  title: z.string().max(20, {
    message: "大綱不能超過 20 字",
  }),
  outline: z
    .string()
    .max(200, {
      message: "大綱不能超過 200 字",
    })
    .optional(),
  readingGuide: z
    .string()
    .max(500, {
      message: "閱讀須知不能超過 500 字",
    })
    .optional(),
  afterword: z
    .string()
    .max(5000, {
      message: "後記不能超過 5000 字",
    })
    .optional(),
  content: z
    .string()
    .min(200, {
      message: "文章至少超過 200 字，才能發布喔！",
    })
    .max(200000, {
      message:
        "文章不能超過 200,000 字（覺得不太夠，可以填寫表單跟開發者說，可以做調整！）",
    }),
  eighteen: z.boolean().default(false).optional(),
});

export function NewPost() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [lineCount, setLineCount] = useState(50);
  const [wordCountContent, setWordCountContent] = useState(0);
  const [wordCountOutline, setWordCountOutline] = useState(0);
  const [wordCountReadingGuide, setWordCountReadingGuide] = useState(0);
  const [wordCountAfterword, setWordCountAfterword] = useState(0);

  useEffect(() => {
    // 內文：根據行數調整高度
    const lines = content.split("\n").length;
    const newLineCount = 50 + Math.ceil(Math.max(lines - 50, 0) / 10) * 10;
    if (lineCount !== newLineCount) {
      setLineCount(newLineCount);
    }
  }, [content, lineCount]);

  // 計算內文字元數
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    const nonWhitespaceCharacterCount = newContent.replace(/\s/g, "").length;
    setWordCountContent(nonWhitespaceCharacterCount);
  };

  // 計算閱讀須知字元數
  const handleReadingGuideChange = (newContent: string) => {
    const nonWhitespaceCharacterCount = newContent.replace(/\s/g, "").length;
    setWordCountReadingGuide(nonWhitespaceCharacterCount);
  };

  // 計算大綱字元數
  const handleOutlineChange = (newContent: string) => {
    const nonWhitespaceCharacterCount = newContent.replace(/\s/g, "").length;
    setWordCountOutline(nonWhitespaceCharacterCount);
  };

  // 計算後記字元數
  const handleAfterwordChange = (newContent: string) => {
    const nonWhitespaceCharacterCount = newContent.replace(/\s/g, "").length;
    setWordCountAfterword(nonWhitespaceCharacterCount);
  };

  // 送出
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ file: new-post.tsx:75 ~ onSubmit ~ data:", data);
    toast({
      title: "文章上傳成功！",
      description: "又是一篇偉大的作品！✨",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 flex flex-col"
      >
        {/* 標題 */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 items-center">
                  <PiBookDuotone />
                  標題
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="來個震攝人心的標題..."
                  className="bg-primary-foreground"
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                不要超過 20 字喔！
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 大綱 */}
        <FormField
          control={form.control}
          name="outline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 items-center">
                  <PiBookDuotone />
                  大綱
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="如果這裡沒填寫，會自動抓取內文前 100 字。"
                  className="bg-primary-foreground"
                  rows={10}
                  onContentChange={(newContent) => {
                    field.onChange(newContent);
                    handleOutlineChange(newContent);
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {wordCountOutline} / 200
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 閱讀須知 */}
        <FormField
          control={form.control}
          name="readingGuide"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 items-center">
                  <PiBookDuotone />
                  閱讀須知
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="可以放上一些閱讀須知，例如：本文有些暴力場景，請注意？（可以不填寫）"
                  className="bg-primary-foreground"
                  rows={10}
                  onContentChange={(newContent) => {
                    field.onChange(newContent);
                    handleReadingGuideChange(newContent);
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {wordCountReadingGuide} / 500
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 本文 */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 items-center">
                  <PiBookDuotone />
                  本文
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="放上您最偉大的創作..."
                  className="bg-primary-foreground"
                  rows={lineCount}
                  onContentChange={(newContent) => {
                    field.onChange(newContent);
                    handleContentChange(newContent);
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {wordCountContent} / 200,000
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 後記 */}
        <FormField
          control={form.control}
          name="afterword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex gap-2 items-center">
                  <PiBookDuotone />
                  後記
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="寫這篇文的心路歷程，故事或是一些碎念也可以：Ｐ（可以不填寫）"
                  className="bg-primary-foreground"
                  rows={10}
                  onContentChange={(newContent) => {
                    field.onChange(newContent);
                    handleAfterwordChange(newContent);
                  }}
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {wordCountAfterword} / 5000
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 年齡限制 */}
        <FormField
          control={form.control}
          name="eighteen"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 gap-2 bg-background border-foreground">
              <div className="">
                <FormLabel className="text-base">
                  <div className="flex items-center gap-2">
                    <PiWarningFill />
                    是否開啟年齡限制
                  </div>
                </FormLabel>
                <FormDescription>
                  雖然不會審查，但是還是要提醒您，如果您的文章內容不適合未成年人閱讀，請開啟此狀態。
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
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
