"use client"

import type React from "react"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface AddSectionFormProps {
    onAddSection: (title: string, content: string) => void
}

export function AddSectionForm({ onAddSection }: AddSectionFormProps) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!title.trim() || !content.trim()) {
            return
        }

        onAddSection(title.trim(), content.trim())
        setTitle("")
        setContent("")
    }

    return (
        <div className="mb-8 rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Plus className="h-5 w-5" />
                Add New Section
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        placeholder="Enter section title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        placeholder="Enter section content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={5}
                        required
                    />
                </div>
                <Button type="submit" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                </Button>
            </form>
        </div>
    )
}
