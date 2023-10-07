import './HeaderMinifyLoginExample.css';

import { IconChatStroked } from '@consta/icons/IconChatStroked';
import { IconRing } from '@consta/icons/IconRing';
import { Example } from '@consta/stand';
import React, { useState } from 'react';

import { cn } from '../../../../../utils/bem';
import { Text } from '../../../../Text/Text';
import {
  Header,
  HeaderButton,
  HeaderLogin,
  HeaderLogo,
  HeaderMenu,
  HeaderModule,
  HeaderSearchBar,
} from '../../../Header';
import { SearchBarPropOnSearch } from '../../../SearchBar/HeaderSearchBar';

const cnExample = cn('HeaderMinifyLoginExample');

export function HeaderMinifyLoginExample() {
  const [value, setValue] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(false);
  // eslint-disable-next-line no-alert
  const handleSearch: SearchBarPropOnSearch = ({ value }) =>
    alert(`Произведен поиск, запрос - ${value} `);
  const handleLogin = () => setAuthorized(!authorized);

  const menuItems = [
    {
      label: 'Проекты',
      href: '#projects',
      active: true,
    },
    {
      label: 'Задачи',
      href: '#tasks',
    },
    {
      label: 'Еще',
      onClick: () => alert('Еще'),
    },
  ];

  return (
    <Example col={1}>
      <Header
        className={cnExample()}
        leftSide={
          <>
            <HeaderModule>
              <HeaderLogo>
                <Text as="p" size="l" weight="bold">
                  Logotype
                </Text>
              </HeaderLogo>
            </HeaderModule>
            <HeaderModule indent="l">
              <HeaderSearchBar
                placeholder="я ищу"
                label="поиск"
                value={value}
                onChange={setValue}
                onSearch={handleSearch}
              />
            </HeaderModule>
            <HeaderModule indent="l">
              <HeaderMenu items={menuItems} />
            </HeaderModule>
          </>
        }
        rightSide={
          <>
            <HeaderModule indent="s">
              <HeaderButton iconLeft={IconChatStroked} />
            </HeaderModule>
            <HeaderModule indent="s">
              <HeaderButton iconLeft={IconRing} />
            </HeaderModule>
            <HeaderModule indent="s">
              <HeaderLogin
                className={cnExample('Login', { authorized })}
                authorized={authorized}
                personName="Вадим Матвеев"
                personInfo="В другом офисе"
                personStatus="available"
                onClick={handleLogin}
                isMinified
              />
            </HeaderModule>
          </>
        }
      />
    </Example>
  );
}
