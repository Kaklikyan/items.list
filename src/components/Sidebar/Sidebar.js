import React from 'react';
import PropTypes from 'prop-types';

import * as UI from './Sidebar.styles';
import { Icon, GLYPHS } from '../Icon';

export const Sidebar = (props) => {
  const {
    items,
    activeItem,
    changeActiveItem
  } = props;
  
  return (
    <UI.Self>
      <UI.Header>
        Items
      </UI.Header>
      <UI.ListWrapper>
        {items && items.map(item => 
          <UI.ListItem
            key={item.id}
            className={item.id === activeItem.id ? 'active' : ''}
            onClick={changeActiveItem(item)}
          >
            <UI.ItemInner>
              <Icon 
                glyph={GLYPHS.active}
                fill='#00d1b2'
              />
              <UI.ItemInnerText>
                {item.name}
              </UI.ItemInnerText>
            </UI.ItemInner>
            {item.id === activeItem.id && 
              <Icon 
                glyph={GLYPHS.arrowRight}
                fill='#878787'
                width={20}
                height={20}
              />
            }
          </UI.ListItem>
        )}
      </UI.ListWrapper>
    </UI.Self>
  )
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.object.isRequired,
  changeActiveItem: PropTypes.func.isRequired
};
