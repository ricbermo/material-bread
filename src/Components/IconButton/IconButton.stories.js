import React from 'react';
import { View } from 'react-native';

import { IconButton } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|Icon Button', module)
  .addParameters({ jest: ['IconButton'] })
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)

  .add('Component', () => (
    <Container>
      <Header title={'Icon Button'} />

      <IconButton name="alarm" size={32} />
      <IconButton name="face" size={32} color={'purple'} />
      <IconButton name="arrow-back" size={32} color={'orange'} />
    </Container>
  ));