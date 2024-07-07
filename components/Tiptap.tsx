'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './Toolbar';
import BaseHeading from '@tiptap/extension-heading'
import { mergeAttributes } from '@tiptap/core'
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';

type Levels = 1 | 2 | 3 | 4

const classes: Record<Levels, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
}

export const Heading = BaseHeading.configure({ levels: [1, 2, 3, 4] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
});

export default function Tiptap({
  onChange,
}: {
  onChange: (richText: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
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
      Heading.configure({ levels: [1, 2, 3, 4] }).extend({
        levels: [1, 2, 3, 4],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level) 
            ? node.attrs.level 
            : this.options.levels[0]
          const classes: any = {
            1: 'text-4xl',
            2: 'text-3xl',
            3: 'text-2xl',
            4: 'text-xl',
          }
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]} font-bold`,
            }),
            0,
          ]
        },
      }),
      Underline,
      Superscript,
      Subscript,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'right', 'center', 'justify'],
      })
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
    <div className='mx-4 sm:mx-10'>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}