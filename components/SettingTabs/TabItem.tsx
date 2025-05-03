"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <>
          {/* <motion.div
            layoutId="underline"
            id="underline"
            className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
          /> */}

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
            />
          </AnimatePresence>
        </>
      )}
    </Tabs.Trigger>
  );
}
