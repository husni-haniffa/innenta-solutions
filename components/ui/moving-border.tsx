"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden bg-transparent text-white antialiased",
  {
    variants: {
      variant: {
        default: "bg-slate-900/[0.8] border-slate-800 backdrop-blur-xl",
        primary: "bg-primary/[0.8] border-primary backdrop-blur-xl",
        secondary: "bg-secondary/[0.8] border-secondary backdrop-blur-xl",
        destructive: "bg-destructive/[0.8] border-destructive backdrop-blur-xl",
        outline: "bg-background/[0.8] border-border backdrop-blur-xl",
      },
      size: {
        default: "h-10 min-w-40 text-sm p-[1px]",
        sm: "h-8 min-w-32 text-xs p-[1px]",
        lg: "h-12 min-w-48 text-base p-[1px]",
        xl: "h-14 min-w-56 text-lg p-[1px]",
        icon: "size-10 p-[1px]",
        "icon-sm": "size-8 p-[1px]",
        "icon-lg": "size-12 p-[1px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const borderVariants = cva(
  "bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
  {
    variants: {
      variant: {
        default: "bg-[radial-gradient(#0ea5e9_40%,transparent_60%)]",
        primary: "bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]",
        secondary: "bg-[radial-gradient(hsl(var(--secondary))_40%,transparent_60%)]",
        destructive: "bg-[radial-gradient(hsl(var(--destructive))_40%,transparent_60%)]",
        outline: "bg-[radial-gradient(hsl(var(--foreground))_40%,transparent_60%)]",
      },
      size: {
        default: "h-20 w-20",
        sm: "h-16 w-16",
        lg: "h-24 w-24",
        xl: "h-28 w-28",
        icon: "h-20 w-20",
        "icon-sm": "h-16 w-16",
        "icon-lg": "h-24 w-24",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({
  borderRadius = "0.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  variant = "default",
  size = "default",
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & VariantProps<typeof buttonVariants> & {
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(buttonVariants({ variant, size }), containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              borderVariants({ variant, size }),
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center gap-2 border px-4 py-2",
          variant === "default" && "border-slate-800 bg-slate-900/[0.8]",
          variant === "primary" && "border-primary bg-primary/[0.8]",
          variant === "secondary" && "border-secondary bg-secondary/[0.8]",
          variant === "destructive" && "border-destructive bg-destructive/[0.8]",
          variant === "outline" && "border-border bg-background/[0.8]",
          "[&_img]:size-6 [&_img]:rounded-full [&_img]:object-cover",
          "[&_svg]:size-5 [&_svg]:shrink-0",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => {
    if (!pathRef.current) return 0;
    try {
      return pathRef.current.getPointAtLength(val).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val) => {
    if (!pathRef.current) return 0;
    try {
      return pathRef.current.getPointAtLength(val).y;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};