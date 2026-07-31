import React from "react";
import { cn } from "@/lib/utils"; 

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-1", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

