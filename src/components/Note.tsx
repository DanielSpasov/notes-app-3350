import { Link } from 'react-router-dom';
import { FC } from 'react';

import { INote } from '../types/Note';

import CloseIcon from '../svgs/Close';

type NoteProps = {
  note: INote;
  onRemove: (note: INote) => void;
};

const Note: FC<NoteProps> = ({ note, onRemove }) => {
  return (
    <article className="flex flex-col min-w-64 w-64 min-h-64 max-h-64 shadow-sm shadow-neutral-400 rounded-md m-3 hover:scale-105">
      <header className="flex justify-between rounded-t-md bg-yellow-300">
        <Link
          to={`${note.id}`}
          className="p-2 whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline"
        >
          {note.title}
        </Link>

        <CloseIcon
          className="my-2 mr-2 p-1 min-w-6 min-h-6 rounded-md cursor-pointer hover:bg-white"
          onClick={() => onRemove(note)}
        />
      </header>
      <p className="pl-2 h-full break-words overflow-y-auto">{note.content}</p>
    </article>
  );
};

export default Note;
