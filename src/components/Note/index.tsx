import { Link } from 'react-router-dom';
import { FC } from 'react';

import CloseIcon from '../../svgs/Close';

import { NoteProps } from './helpers';

const Note: FC<NoteProps> = ({ note, onRemove }) => {
  return (
    <article
      className={`flex flex-col shadow-sm shadow-neutral-400 rounded-md hover:scale-105 m-4 w-36 h-36 text-sm sm:w-40 sm:h-40 sm:text-md md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 xl:text-lg 2xl:w-64 2xl:h-64`}
    >
      <header className="flex justify-between rounded-t-md bg-yellow-300">
        <Link
          to={`${note.id}`}
          className="p-2 whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline"
        >
          {note.title}
        </Link>

        <CloseIcon
          className="my-2 mr-2 p-1 min-w-7 h-7 rounded-md cursor-pointer hover:bg-white"
          onClick={() => onRemove(note)}
        />
      </header>
      <p className="px-2 h-full break-words overflow-y-auto">{note.content}</p>
    </article>
  );
};

export default Note;
