import { FC, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CloseIcon from '../../svgs/Close';
import PlusIcon from '../../svgs/Plus';

import { DraftProps, responsiveProps } from './helpers';

const Draft: FC<DraftProps> = ({ setDraft, onAdd, noteRef }) => {
  const handleAdd = useCallback(() => {
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const contentEl = document.getElementById('content') as HTMLTextAreaElement;

    if (!titleEl.value || !contentEl.value) {
      if (!titleEl.value) titleEl.focus();
      if (!contentEl.value) contentEl.focus();
      return;
    }

    onAdd({
      id: uuidv4(),
      title: titleEl.value,
      content: contentEl.value
    });
    setDraft(false);
  }, [onAdd, setDraft]);

  return (
    <article
      className={`relative shadow-sm shadow-neutral-400 rounded-md m-4 ${Object.values(
        responsiveProps.note
      ).join(' ')}`}
      ref={noteRef}
    >
      <header className="flex justify-between items-center bg-yellow-300 p-2 rounded-t-md">
        <input
          className="border-b-neutral-100 w-[70%] border-b-2 bg-transparent outline-none"
          placeholder="Note Title..."
          name="title"
          id="title"
        />
        <CloseIcon
          className="p-1 w-7 h-7 hover:bg-white rounded-md cursor-pointer"
          onClick={() => setDraft(false)}
        />
      </header>

      <textarea
        className={`w-full resize-none px-2 outline-none [&~svg]:hover:opacity-70 ${Object.values(
          responsiveProps.textarea
        ).join(' ')}`}
        placeholder="Note content..."
        id="content"
      />

      <PlusIcon
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        className="absolute bottom-0 right-0 bg-blue-400 [&>path]:stroke-white w-8 h-8 p-1 rounded-md m-1 outline-none cursor-pointer opacity-0 hover:opacity-100 focus:opacity-100"
        onClick={() => handleAdd()}
      />
    </article>
  );
};

export default Draft;
