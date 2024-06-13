'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: "flex flex-col px-4 py-3 justify-start border border-l border-gray-700 items-start h-[80vh] gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none m-10",
      }
    }
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap;