import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Icon from './Icon';
import { INote } from '../types/Note';

type DraftNoteProps = {
  setDraft: Dispatch<SetStateAction<boolean>>;
  onAdd: (note: INote) => void;
};

const DraftNote: FC<DraftNoteProps> = ({ setDraft, onAdd }) => {
  const handleAdd = useCallback(() => {
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const contentEl = document.getElementById('content') as HTMLTextAreaElement;
    onAdd({
      id: uuidv4(),
      title: titleEl.value,
      content: contentEl.value
    });
    setDraft(false);
  }, [onAdd, setDraft]);

  return (
    <article className="relative w-64 h-64 shadow-sm shadow-neutral-400 rounded-md mx-3">
      <header className="flex justify-between items-center bg-yellow-300 p-2 rounded-t-md">
        <input
          className="border-b-neutral-100 border-b-2 bg-transparent outline-none"
          placeholder="Note Title..."
          name="title"
          id="title"
        />
        <Icon
          model="close"
          className="p-1 w-7 h-7 hover:bg-white rounded-md cursor-pointer"
          onClick={() => setDraft(false)}
        />
      </header>

      <textarea
        className="w-full max-h-52 min-h-52 resize-none p-2 outline-none [&~svg]:hover:opacity-70"
        placeholder="Note content..."
        id="content"
      />

      <Icon
        model="plus"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        className="absolute bottom-0 right-0 bg-blue-400 [&>path]:stroke-white w-8 h-8 p-1 rounded-md m-1 outline-none cursor-pointer opacity-0 hover:opacity-100"
        onClick={() => handleAdd()}
      />
    </article>
  );
};

export default DraftNote;
