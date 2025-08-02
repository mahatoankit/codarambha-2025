"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee.jsx";

export default function ThreeDMarqueeDemo() {
  const images = [
    // AI & Machine Learning
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Coding & Programming
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Data Science & Analytics
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Innovation & Technology
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Collaboration & Teamwork
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Urban Technology & Smart Cities
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Startups & Innovation
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Tech Workspace & Development
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Digital Innovation & IoT
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Problem Solving & Ideas
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=entropy&auto=format",
    
    // Future Technology & Research
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=entropy&auto=format",
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop&crop=entropy&auto=format",
  ];

  return (
    <div className="w-full h-full">
      <ThreeDMarquee images={images} />
    </div>
  );
}
