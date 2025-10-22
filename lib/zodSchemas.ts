
import {z} from 'zod' 

export const courseLevels =["Beginner","Intermediate","Advanced"] as const;
export const courseStatus = ["Draft","Published","Archived"] as const

export const courseSchema = z.object({
    title: z.string().min(3, {message:"Title must be at least 3 characters"}).max(100,{message: "Title must be as most 100 character long"}),
    description: z.string().min(3, {message:"Description must be at least 3 characters"}),
    fileKey: z.string().min(1, {message:"fileKey is Requiered"}),
    price: z.coerce.number().min(1,  {message:"Price must be a positive number"}),
    duration: z.coerce.number().min(1,  {message:"Duration must be at least 1hr characters"}).max(500,  {message:"Duration must be at most 100hr"}),
    level: z.enum(courseLevels,  {message:"Level is Required"}),
    category:z.string(),
    smallDescription: z.string().min(3,  {message:"smallDescription must be at least 3 characters"}).max(200,  {message:"smallDescrition must be at most 200 characters"}),
    slug: z.string().min(3,  {message:"slug must be at least 3 characters long"}),
    status: z.enum(courseStatus,  {message:"Status is Required"}),
});

export type CourseSchemaType = z.infer<typeof courseSchema>