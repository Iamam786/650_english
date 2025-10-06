"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import React, { useEffect, useState } from "react";
import { documentationSections } from "@/data/documentation-sections"
import { Moon, Sun } from "lucide-react"

export function DocumentationAccordion() {
	const [darkMode, setDarkMode] = useState(true)

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [darkMode])

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme === "dark") setDarkMode(true)
	}, [])

	return (
		<div className="mx-auto max-w-5xl px-4 max-md:px-1.5 py-10 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
			<div className="mb-6">
				<div className="flex justify-between">
					<h1 className="mb-4 whitespace-nowrap max-sm:whitespace-normal text-5xl max-[768px]:text-3xl font-bold tracking-tight text-balance">650 English Phrases for Everyday Speaking</h1>
					<div className="relative top-[-1.8rem] right-3 flex  justify-end max-md:absolute max-sm:top-0 max-md:right-3 max-sm:mt-3">
						<button
							onClick={() => setDarkMode((prev) => !prev)}
							className="rounded-2xl w-max h-min py-2 px-3 bg-card border shadow-lg cursor-pointer hover:bg-muted transition"
							aria-label="Toggle dark mode"
						>
							{/* {darkMode ? "🌙 Dark" : "☀️ Light"} */}
							{darkMode ?
								<Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
								: <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
							}
						</button>
					</div>
				</div>
				<p className="text-lg text-muted-foreground text-pretty max-md:pl-2">
					To improve your English speaking, practice regularly with others and listen to native speakers. Don’t be afraid to make mistakes—each one helps you learn. Try to think in English and use new words in daily conversations. Consistency is key to becoming more confident!.
				</p>
			</div>

			<Accordion type="single" collapsible className="space-y-2 ">
				{documentationSections.map((section, index) => {
					const Icon = section.icon
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
									{/* {section.content.split("\n\n").map((paragraph, index) => (
										<p key={index} className="whitespace-pre-line">
										{paragraph}</p>
                 					 ))} */}
									{/* <p className="whitespace-pre-line text-lg">{section.content}</p> */}
									<p className="whitespace-pre-line text-lg" dangerouslySetInnerHTML={{ __html: section.content }}></p>
								</div>
							</AccordionContent>
						</AccordionItem>
					)
				})}
			</Accordion>

			<div className="mt-12 rounded-lg border bg-muted/50 p-6">
				<h2 className="mb-2 text-lg font-semibold">Need more help?</h2>
				<p className="text-muted-foreground mb-4">If you have any questions or need further assistance, feel free to reach out!</p>
				<div className="flex justify-center align-middle"><span>CopyRight &copy; 2025 <strong className="text-sm! underline">AbdeMustafa</strong></span></div>
			</div>
		</div>
	)
}