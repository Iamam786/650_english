"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";
import { documentationSections } from "@/data/documentation-sections";
import {
  Moon,
  Sun,
  Plus,
  Minus,
  Delete,
  Trash2,
  NotebookPen,
} from "lucide-react";
import { AddSectionForm } from "@/components/add_content";

const STORAGE_KEY = "custom_sections_v1";

export function DocumentationAccordion() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Add custom sections state and localStorage handling
  interface CustomSection {
    id: string;
    title: string;
    content: string;
  }
  const [customSections, setCustomSections] = useState<CustomSection[]>([]);
  useEffect(() => {
    const savedSections = localStorage.getItem(STORAGE_KEY);
    if (savedSections) {
      try {
        const parsed = JSON.parse(savedSections);
        setCustomSections(parsed);
      } catch (error) {
        console.error("Failed to load saved sections:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (customSections.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customSections));
    }
  }, [customSections]);

  // form visibility state
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddSection = (title: string, content: string) => {
    const newSection: CustomSection = {
      id: `custom-${Date.now()}`,
      title,
      content,
    };

    setCustomSections([...customSections, newSection]);
    setShowAddForm(false); // form close after submit
  };

  const handleDeleteSection = (id: string) => {
    setCustomSections(customSections.filter((section) => section.id !== id));
  };

  // Open all by default on first render
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    const all = documentationSections.map((s) => s.title);
    setValue(all);
  }, [documentationSections]);

  const openAll = () => {
    const all = documentationSections.map((s) => s.title);
    setValue(all);
  };

  const closeAll = () => setValue([]);

  const allOpen = value.length === documentationSections.length;

  return (
    <div className="mx-auto max-w-5xl px-4 max-md:px-1.5 py-10 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="mb-6">
        <div className="flex justify-between">
          <h1 className="mb-4 whitespace-nowrap max-sm:whitespace-normal text-5xl max-[768px]:text-3xl font-bold tracking-tight text-balance">
            650 English Phrases for Everyday Speaking
          </h1>
          <div className="relative top-[-1.8rem] right-3 flex  justify-end max-md:absolute max-sm:top-0 max-md:right-3 max-sm:mt-3">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="rounded-2xl w-max h-min py-2 px-3 bg-card border shadow-lg cursor-pointer hover:bg-muted transition"
              aria-label="Toggle dark mode"
            >
              {/* {darkMode ? "🌙 Dark" : "☀️ Light"} */}
              {darkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
        <p className="text-lg text-muted-foreground text-pretty max-md:pl-2">
          To improve your English speaking, practice regularly with others and
          listen to native speakers. Don’t be afraid to make mistakes—each one
          helps you learn. Try to think in English and use new words in daily
          conversations. Consistency is key to becoming more confident!.
        </p>
      </div>

      {/* Open and Closed form  */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded hover:rounded-2xl dark:bg-gray-500 text-black cursor-pointer hover:text-white px-4 py-2 shadow hover:shadow-2xl hover:bg-primary/100 transition ease-in"
        >
          {showAddForm ? (
            <Minus className="h-5 w-5" />
          ) : (
            <Plus className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Show AddSectionForm only if showAddForm is true */}
      {showAddForm && (
        <div className="mb-8 rounded-lg border bg-card p-6 shadow-sm relative">
          <AddSectionForm onAddSection={handleAddSection} />
        </div>
      )}

      {/* Show only ONE button at a time */}
      <div>
        {allOpen ? (
          <button
            onClick={closeAll}
            className="rounded-lg bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600"
          >
            Close All
          </button>
        ) : (
          <button
            onClick={openAll}
            className="rounded-lg bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700"
          >
            Open All
          </button>
        )}
      </div>

      <Accordion
        type="multiple"
        value={value}
        onValueChange={setValue}
        className="space-y-2 "
      >
        {/* // Custom user-added sections */}
        {customSections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.title}
            className="rounded-lg border bg-card px-3 shadow-sm transition-shadow hover:shadow-md"
          >
            <AccordionTrigger className="py-6 text-left hover:no-underline">
              <div className="flex items-center gap-4 w-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <NotebookPen className="h-5 w-5 cursor-progress text-primary" />
                </div>
                <span className="text-xl font-semibold">{section.title}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSection(section.id);
                  }}
                  className="ml-auto cursor-pointer  rounded px-2 py-1 text-xs bg-red-500 text-white hover:bg-red-600"
                  aria-label="Delete section"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className=" space-y-4 text-muted-foreground leading-relaxed">
                <p className="whitespace-pre-line text-lg">{section.content}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}

        {/* // Built-in documentation sections */}
        {documentationSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <AccordionItem
              key={index}
              value={section.title}
              className="rounded-lg border bg-card px-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xl font-semibold">{section.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <div className=" space-y-4 text-muted-foreground leading-relaxed">
                  <p className="whitespace-pre-line text-lg">
                    {section.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="mt-12 rounded-lg border bg-muted/50 p-6">
        <h2 className="mb-2 text-lg font-semibold">Need more help?</h2>
        <p className="text-muted-foreground mb-4">
          If you have any questions or need further assistance, feel free to
          reach out!
        </p>
        <div className="flex justify-center align-middle">
          <span>
            CopyRight &copy; 2025{" "}
            <strong className="text-sm! underline">AbdeMustafa</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
