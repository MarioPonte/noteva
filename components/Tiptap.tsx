'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './Toolbar';

export default function Tiptap({
  onChange,
}: {
  onChange: (richText: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: 'text-xl font-bold',
            levels: [2]
          }
        },
        bold: {
          HTMLAttributes: {
            class: 'font-bold',
          }
        },
        italic: {
          HTMLAttributes: {
            class: 'italic',
          }
        },
        strike: {
          HTMLAttributes: {
            class: 'line-through',
          }
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: "p-6 rounded-md border min-h-[600px] border-input",
      }
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    }
  })

  return (
    <div className='mx-10'>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}