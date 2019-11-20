import React from 'react';
import PropTypes from 'prop-types';

import * as UI from './Main.styles';
import { Icon, GLYPHS } from '../Icon';

export const Main = (props) => {
  const {
    actions,
    item: {
      name,
      description,
      resourceType,
      path,
      actionIds
    }
  } = props;

  return (
    <UI.Self>
      <UI.Container>
      <UI.Header>
        {name}
      </UI.Header>
      <UI.BlocksWrapper>
        <UI.DetailsBlock>
          <UI.BlockHeader>
            <UI.BlockHeaderText>
              general details
            </UI.BlockHeaderText>
            <Icon
              glyph={GLYPHS.help}
              fill='#666666'
            />
          </UI.BlockHeader>
          <UI.PanelWrapper>
            <UI.Label>
              NAME
            </UI.Label>
            <UI.Panel>
              {name}
            </UI.Panel>
          </UI.PanelWrapper>
          <UI.PanelWrapper>
            <UI.Label>
              DESCRIPTION
            </UI.Label>
            <UI.Panel>
              {description}
            </UI.Panel>
          </UI.PanelWrapper>
          <UI.PanelWrapper>
            <UI.Label>
              RESOURCE TYPE
            </UI.Label>
            <UI.Panel>
              {resourceType}
            </UI.Panel>
          </UI.PanelWrapper>
          <UI.PanelWrapper>
            <UI.Label>
              PATH
            </UI.Label>
            <UI.Panel>
              {path}
            </UI.Panel>
          </UI.PanelWrapper>
        </UI.DetailsBlock>
        <UI.ActionsBlock>
          <UI.BlockHeader isActions>
            <UI.BlockHeaderText>
              permitted actions
            </UI.BlockHeaderText>
            <Icon
              glyph={GLYPHS.help}
              fill='#666666'
            />
          </UI.BlockHeader>
          {actions && actions.map(action => actionIds.includes(action.id) && 
            <UI.ActionPanel key={action.id}>
              {action.name}
            </UI.ActionPanel>            
          )}
        </UI.ActionsBlock>
      </UI.BlocksWrapper>
      </UI.Container>
    </UI.Self>
  )
}

Main.propTypes = {
  actions: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
};
