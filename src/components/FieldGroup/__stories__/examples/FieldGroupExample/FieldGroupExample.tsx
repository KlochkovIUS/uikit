import React from 'react';

import { items } from '../../../__mocks__/data.mock';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { Button } from '../../../../Button/Button';
import { Select } from '../../../../Select/Select';
import { TextField } from '../../../../TextField/TextField';
import { FieldGroup } from '../../../FieldGroup';

export const FieldGroupExample = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <FieldGroup form="round">
        <TextField placeholder="TextField" />
        <Select
          placeholder="Select"
          items={items}
          onChange={() => {
            console.log('onChange');
          }}
        />
        <Button label="Button" />
      </FieldGroup>
    </div>
  );
};