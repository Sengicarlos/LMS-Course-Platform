"use client"

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


interface featureProps{
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Comprehensive Course",
    description: "Access a wide range of courses across various subjects, designed to cater to different learning styles and levels.",
    icon: "📚",
  },
  {
    title: "Interactive Learning",
    description: "Engage with interactive content, including quizzes, videos, and discussion forums, to enhance your learning experience.",
    icon: "🎮",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress tracking and performance analytics.",
    icon: "📈",
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners and educators to share knowledge, collaborate, and grow together.",
    icon: "👥",
  }
 
]


export default function Home() {   
  return (
   <>
   
   <section className="relative py-20">
    <div className="flex flex-col items-center text-center space-y-8">
      <Badge variant={"outline"}>
        The future of Online education is here!
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">Elevate Your Online Experience </h1>
      <p className="maz-w-[700px] text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive learning management system, Access high-quality courses anytime, anywhere. 
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link 
          className={buttonVariants({ size: "lg" })}
          href="/courses"
          >
            Explore Courses
          </Link>
        <Link 
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href="/login"
          >
            Sign in
          </Link>
      </div>
    </div>
    
   </section>

   <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
  {features.map((feature, index) => (
    <Card key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-4xl mb-4">{feature.icon}</div>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  ))}
</section>

   </>
  );
}
