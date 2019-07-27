import { flatten } from 'flat';
import { gatIdFromDotPath } from "../getIdFromDotPath";

const localizedStrings = {
  home: {
    title: 'Inicio',
  },
};

export default flatten(localizedStrings);
export const localizedStringsKeypaths = gatIdFromDotPath(localizedStrings);
