"use client";

import { type Editor } from "@tiptap/react";
import {
    Heading,
    Heading2,
    Heading3,
    Heading4,
} from "lucide-react";
import { Toggle } from "./ui/toggle";

type Props = {
    editor: Editor
}

export function HeadingOptions({ editor }: Props) {
    return (
        <>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 1 })}
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }}
            >
                <Heading className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 2 })}
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }}
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 3 })}
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }}
            >
                <Heading3 className="h-4 w-4" />
            </Toggle>
            <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level: 4 })}
                onPressedChange={() => {
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }}
            >
                <Heading4 className="h-4 w-4" />
            </Toggle>
        </>
    )
}