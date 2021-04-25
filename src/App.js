import React, {useState} from 'react';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
      <Root activeView="viewMain" onTransition={() => console.log('view changed')}>
        <View id="viewMain" activePanel={activePanel}>
          <Home id='home' go={go}/>
        </View>
      </Root>
  );
};

export default App;

