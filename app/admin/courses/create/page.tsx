"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { courseCategory, courseLevels, courseSchema, CourseSchemaType, courseStatus } from "@/lib/zodSchemas";
import { ArrowLeft, PlusIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import slugify from "slugify";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RichTextEditor } from "@/components/rich-text-editor/editor";
// import { Menubar } from "@/components/rich-text-editor/Menubar";

export default function CourseCreatePage() {
  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(courseSchema), // pass the schema object
    defaultValues: {
      title: "",
      description: "",
      fileKey: "",
      price: 0,
      duration: 0,
      level: "Beginner",
      category:"IT & Software" ,
      status: "Draft",
      slug: "",
      smallDescription: "",
    },
  });

  function onSubmit(value: CourseSchemaType) {
    console.log(value);
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href="/admin/courses"
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Courses</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Infomation</CardTitle>
          <CardDescription>Provide basic information about the course</CardDescription>
        </CardHeader>
        <CardContent>

            <Form {...form}>
                <form className="space-y-6" onClick={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Title
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-4 items-end">
                        <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>
                                    Slug
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Slug" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="button" className="w-fit" onClick={() =>{
                        const titleValue = form.getValues("title");

                        const slug = slugify(titleValue || "");

                        form.setValue('slug',slug, {shouldValidate: true})
                    } }>
                        Generate Slug <SparkleIcon className="ml-1 size={16}" />
                    </Button>
                    </div>

                    <FormField
                        control={form.control}
                        name="smallDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Small  Description
                                </FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Small Description" className="min-h-[120px]" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Description
                                </FormLabel>
                                <RichTextEditor />
                                {/* <FormControl>
                                    <Textarea placeholder="Description" className="min-h-[120px]" {...field}/>
                                </FormControl> */}
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                     <FormField
                        control={form.control}
                        name="fileKey"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Thumbnail image
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="thumbnail url" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Category
                                </FormLabel>
                               <Select onValueChange={field.onChange} defaultValues={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder ="Select Category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {courseCategory.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                               </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                         <FormField
                        control={form.control}
                        name="level"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Level
                                </FormLabel>
                               <Select onValueChange={field.onChange} defaultValues={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder ="Select Value" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {courseLevels.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                               </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Duration (hours)
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Duration" type="number" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Price (Tsh)
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Price" type="number" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    </div>
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Status
                                </FormLabel>
                               <Select onValueChange={field.onChange} defaultValues={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder ="Select Status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {courseStatus.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                               </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                <Button>
                    Create Course <PlusIcon className="ml-1" size={16} />
                </Button>
                </form>
            </Form>
        </CardContent>
      </Card>
    </>
  );
}
