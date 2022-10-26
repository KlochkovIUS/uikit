import './RadioGroupExampleSize.css';

import React from 'react';

import { cn } from '##/utils/bem';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { simpleItems } from '../../../__mocks__/data.mock';
import { RadioGroup } from '../../../RadioGroup';

const cnRadioGroupExampleSize = cn('RadioGroupExampleSize');

export const RadioGroupExampleSize = () => {
  const [value, setValue] = React.useState<string | null>(simpleItems[0]);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <RadioGroup
        value={value}
        items={simpleItems}
        getItemLabel={(item) => item}
        onChange={({ value }) => setValue(value)}
        direction="row"
        className={cnRadioGroupExampleSize()}
        size="m"
      />
      <RadioGroup
        value={value}
        items={simpleItems}
        getItemLabel={(item) => item}
        onChange={({ value }) => setValue(value)}
        direction="row"
        className={cnRadioGroupExampleSize()}
        size="l"
      />
    </StoryBookExample>
  );
};