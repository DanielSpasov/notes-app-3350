import { Dispatch, RefObject, SetStateAction } from 'react';

import { INote } from '../../types/Note';

export type DraftProps = {
  setDraft: Dispatch<SetStateAction<boolean>>;
  onAdd: (note: INote) => void;
  noteRef: RefObject<HTMLDivElement>;
};

export const responsiveProps = {
  note: {
    xs: 'w-36 h-36 text-sm',
    sm: 'sm:w-40 sm:h-40 sm:text-md',
    md: 'md:w-44 md:h-44',
    lg: 'lg:w-48 lg:h-48',
    xl: 'xl:w-52 xl:h-52 xl:text-lg',
    '2xl': '2xl:w-64 2xl:h-64'
  },
  textarea: {
    xs: 'max-h-24 min-h-24 text-sm',
    sm: 'sm:max-h-28 sm:min-h-28 sm:text-md',
    md: 'md:max-h-32 md:min-h-32',
    lg: 'lg:max-h-36 lg:min-h-36',
    xl: 'xl:max-h-40 xl:min-h-40 xl:text-lg',
    '2xl': '2xl:max-h-52 2xl:min-h-52'
  }
};
