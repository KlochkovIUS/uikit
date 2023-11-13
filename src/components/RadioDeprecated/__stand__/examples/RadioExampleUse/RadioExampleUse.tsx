import { Example } from '@consta/stand';
import React from 'react';

import { Radio } from '../../../RadioDeprecated';

const emptyFunction = () => {};

export const RadioExampleOne = () => {
  return (
    <Example>
      <Radio label="Это радиокнопка" onChange={emptyFunction} checked />
    </Example>
  );
};
