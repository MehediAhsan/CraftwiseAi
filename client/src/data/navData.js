import {
  Home, FileText, Hash, Image, Scissors, FileCheck,
  Eraser
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Write Article", icon: FileText, path: "/dashboard/write-article" },
  { name: "Blog Titles", icon: Hash, path: "/dashboard/blog-titles" },
  { name: "Generate Images", icon: Image, path: "/dashboard/generate-images" },
  { name: "Remove Background", icon: Eraser, path: "/dashboard/remove-bg" },
  { name: "Remove Object", icon: Scissors, path: "/dashboard/remove-object" },
  { name: "Review Resume", icon: FileCheck, path: "/dashboard/resume-review" },
];
