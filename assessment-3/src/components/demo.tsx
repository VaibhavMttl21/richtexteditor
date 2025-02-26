'use client';


import { Plate } from '@udecode/plate/react';

import { editorPlugins } from './editor-plugins';
import { useCreateEditor } from './use-create-editor';
import { Editor, EditorContainer } from '@/components/plate-ui/editor';


export default function Demo({}: { id: string }) {
  const editor = useCreateEditor({
    plugins: [...editorPlugins],
    
  });

  return (
    <Plate editor={editor}>
      <EditorContainer variant="demo">
        <Editor />
      </EditorContainer>
    </Plate>
  );
}
