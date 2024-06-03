import { Dispatch, RefObject, SetStateAction } from 'react';

import { INote } from '../../types/Note';

export type DraftProps = {
  setDraft: Dispatch<SetStateAction<boolean>>;
  onAdd: (note: INote) => void;
  noteRef: RefObject<HTMLDivElement>;
};

export const responsiveProps = {
  note: {
    sm: ['w-40', 'h-40', 'text-md'],
    md: ['w-44', 'h-44'],
    lg: ['w-48', 'h-48'],
    xl: ['w-52', 'h-52', 'text-lg'],
    '2xl': ['w-64', 'h-64']
  },
  textarea: {
    sm: ['max-h-28', 'min-h-28', 'text-md'],
    md: ['max-h-32', 'min-h-32'],
    lg: ['max-h-36', 'min-h-36'],
    xl: ['max-h-40', 'min-h-40', 'text-lg'],
    '2xl': ['max-h-52', 'min-h-52']
  }
};
