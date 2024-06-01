import { FC } from 'react';

import { INote } from '../types/Note';
import Icon from './Icon';

type NoteProps = {
  note: INote;
  onRemove: (note: INote) => void;
};

const Note: FC<NoteProps> = ({ note, onRemove }) => {
  return (
    <article className="w-64 h-64 shadow-sm shadow-neutral-400 rounded-md mx-3">
      <header className="flex justify-between items-center bg-yellow-300 p-2 rounded-t-md">
        <h1>{note.title}</h1>
        <Icon
          model="close"
          className="p-1 w-7 h-7 hover:bg-white rounded-md cursor-pointer"
          onClick={() => onRemove(note)}
        />
      </header>

      <p className="p-2">{note.content}</p>
    </article>
  );
};

export default Note;
