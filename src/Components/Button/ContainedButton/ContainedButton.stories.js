import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '../../../storybook/helpers/storiesOf';

import { Button, Icon, BodyText } from '../../..';
import Header from '../../../storybook/components/Header';
import Container from '../../../storybook/components/Container';

export default storiesOf('Components|Buttons/Contained Button', module)
  .addParameters({ jest: ['Button'] })
  .add('Simple', () => (
    <Container>
      <Header title={'Simple Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Text'} type="contained" />
        <Button text={'Button'} color={'#E91E63'} type="contained" />
        <Button text={'Buy'} color={'#FF5722'} type="contained" />
        <Button text={'Click Here'} color={'#673AB7'} type="contained" />
        <Button text={'Do not click'} color={'#009688'} type="contained" />
      </View>
    </Container>
  ))
  .add('with left icon', () => (
    <Container>
      <Header title={'Left Icon Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} icon={<Icon name="home" />} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          color={'#FF5722'}
          radius={20}
          type="contained"
        />
        <Button
          text={'Buy'}
          color={'#673AB7'}
          density={-2}
          icon={<Icon name="attach-money" />}
          type="contained"
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('with right icon', () => (
    <Container>
      <Header title={'Right Icon Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button
          text={'Home'}
          icon={<Icon name="home" />}
          type="contained"
          iconPosition={'right'}
        />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          type="contained"
          icon={<Icon name="favorite" />}
          iconPosition={'right'}
        />
        <Button
          text={'Settings'}
          icon={<Icon name="settings" />}
          color={'#FF5722'}
          radius={20}
          type="contained"
          iconPosition={'right'}
        />
        <Button
          text={'Buy'}
          color={'#673AB7'}
          density={-2}
          icon={<Icon name="attach-money" />}
          type="contained"
          iconPosition={'right'}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          icon={<Icon name="archive" />}
          type="contained"
          iconPosition={'right'}
        />
      </View>
    </Container>
  ))
  .add('radius', () => (
    <Container>
      <Header title={'Radius Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} radius={20} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          radius={40}
          icon={<Icon name="favorite" />}
          type="contained"
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-2}
          radius={0}
          icon={<Icon name="attach-money" />}
          type="contained"
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          radius={0}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('density', () => (
    <Container>
      <Header title={'Density Contained Button'} />

      <BodyText text={'Density -1: 32px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-1} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          density={-1}
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          density={-1}
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-1}
          radius={0}
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          density={-1}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>

      <BodyText text={'Density -2: 28px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-2} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          density={-2}
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          density={-2}
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-2}
          radius={0}
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          density={-2}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>

      <BodyText text={'Density -3: 24px'} style={{ marginBottom: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 30,
        }}>
        <Button text={'Home'} density={-3} type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          density={-3}
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          density={-3}
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-3}
          radius={0}
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          density={-3}
          icon={<Icon name="archive" />}
          type="contained"
        />
      </View>
    </Container>
  ))
  .add('loading', () => (
    <Container>
      <Header title={'Loading Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} loading hideLabel type="contained" />
        <Button
          text={'Favorite'}
          color={'#E91E63'}
          borderSize={2}
          loading
          hideLabel
          type="contained"
          icon={<Icon name="favorite" />}
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          loading
          hideLabel
          radius={60}
          type="contained"
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-2}
          radius={0}
          loading
          hideLabel
          type="contained"
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          loading
          hideLabel
          type="contained"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Header title={'Disabled Contained Button'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: 20,
        }}>
        <Button text={'Home'} disabled type="contained" />
        <Button
          color={'#E91E63'}
          borderSize={2}
          loading
          disabled
          type="contained"
        />
        <Button
          text={'Settings'}
          color={'#FF5722'}
          type="contained"
          disabled
          radius={60}
        />
        <Button
          text={'Buy'}
          tcolor={'#673AB7'}
          density={-2}
          radius={0}
          disabled
          type="contained"
          icon={<Icon name="attach-money" />}
        />
        <Button
          text={'Archive'}
          color={'#009688'}
          disabled
          type="contained"
          icon={<Icon name="archive" />}
        />
      </View>
    </Container>
  ))
  .add('full width', () => (
    <Container>
      <Header title={'Full Width Contained Button'} />
      <Button
        fullWidth
        text={'Contained'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
      />

      <Button
        fullWidth
        text={'Radius'}
        color={'#009688'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        radius={40}
      />
      <Button
        fullWidth
        text={'Icon'}
        color={'#E91E63'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        icon={<Icon name="favorite" />}
      />
      <Button
        fullWidth
        color={'#FF5722'}
        type="contained"
        loading
        containerStyle={{ marginBottom: 8 }}
      />
      <Button
        fullWidth
        text={'Disabled'}
        color={'#673AB7'}
        type="contained"
        containerStyle={{ marginBottom: 8 }}
        disabled
      />
    </Container>
  ));
