"use client";

import { type Editor } from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Underline,
    Italic,
    List,
    ListOrdered,
    Undo2,
    Redo2,
} from "lucide-react";
import { Toggle } from "./ui/toggle";
import { HeadingOptions } from "./HeadingOptions";
import { Header } from "./Header";
import { TextAlignOptions } from "./TextAlignOptions";

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {
    if (!editor) return null;

    return (
        <div className="border border-input bg-transparent rounded-md my-4">
            <Header/>
            <hr />
            <div className="flex gap-1 p-2">
                <HeadingOptions editor={editor} />
                <Toggle
                    size="sm"
                    pressed={editor.isActive("bold")}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                >
                    <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("italic")}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                >
                    <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("strike")}
                    onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                >
                    <Strikethrough className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("underline")}
                    onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
                >
                    <Underline className="h-4 w-4" />
                </Toggle>

                <Toggle
                    size="sm"
                    pressed={editor.isActive("bulletList")}
                    onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <List className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("orderedList")}
                    onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <ListOrdered className="h-4 w-4" />
                </Toggle>

                <TextAlignOptions editor={editor} />

                <Toggle
                    size="sm"
                    pressed={editor.isActive("undo")}
                    onPressedChange={() => editor.chain().focus().undo().run()}
                >
                    <Undo2 className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive("redo")}
                    onPressedChange={() => editor.chain().focus().redo().run()}
                >
                    <Redo2 className="h-4 w-4" />
                </Toggle>
            </div>
        </div>
    )
}