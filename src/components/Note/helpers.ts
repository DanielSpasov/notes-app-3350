import { INote } from '../../types/Note';

export type NoteProps = {
  note: INote;
  onRemove: (note: INote) => void;
};

export const responsiveProps = {
  note: {
    sm: ['w-40', 'h-40', 'text-md'],
    md: ['w-44', 'h-44'],
    lg: ['w-48', 'h-48'],
    xl: ['w-52', 'h-52', 'text-lg'],
    '2xl': ['w-64', 'h-64']
  }
};
