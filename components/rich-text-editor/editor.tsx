"use client";

import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Menubar } from './Menubar';
import TextAlign from "@tiptap/extension-text-align"

export function RichTextEditor(){
    const editor = useEditor({
        extensions:[StarterKit, TextAlign.configure({
            types: ["heading","paragraph"]
        })],
        content:"",
        immediatelyRender:false,
    })
    return(
        <div>
            <Menubar editor={editor}/>
             <EditorContent editor={editor} className="border rounded-md p-2 min-h-[150px]" />
        </div>
    )
}