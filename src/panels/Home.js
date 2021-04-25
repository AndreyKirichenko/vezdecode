import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {
  Div,
  Group,
  List,
  Cell,
  Header,
  Placeholder,
} from "@vkontakte/vkui";

import {
  Icon28DoneOutline,
  Icon28AccessibilityOutline,
  Icon28BrainOutline,
  Icon56LogoVk,

} from "@vkontakte/icons";
import "@vkontakte/vkui/dist/vkui.css";

const Home = ({id}) => (
    <Panel id={id}>
      <PanelHeader>Визитка «Вездекода»</PanelHeader>
      <Group>
        <Placeholder
            icon={<Icon56LogoVk style={{color: `var(--text_primary)`}}/>}
            header="Вездекод в Туле"
        >
          Марафон для разработчиков и дизайнеров
        </Placeholder>
      </Group>

      <Group>
        <Div>
          Онлайн / Оффлайн марафон по прагромированнию и не только. Множество кейсов по самым различным направлениям.
          Море эмоций и приятных призов. Садитесь в новый вездекод и покажите то, на что вы способны!
        </Div>
      </Group>

      <Group header={<Header mode="secondary">Направления хакатона</Header>}>
        <List>
          <Cell before={<Icon28BrainOutline/>}>веб</Cell>
          <Cell before={<Icon28BrainOutline/>}>мобильная разработка</Cell>
          <Cell before={<Icon28BrainOutline/>}>дизайн интерфейсов</Cell>
          <Cell before={<Icon28BrainOutline/>}>VK Mini Apps</Cell>
          <Cell before={<Icon28BrainOutline/>}>робототехника</Cell>
          <Cell before={<Icon28BrainOutline/>}>информационная безопасность</Cell>
          <Cell before={<Icon28BrainOutline/>}>3D-моделирование</Cell>
          <Cell before={<Icon28BrainOutline/>}>разработка и тестирование API</Cell>
        </List>
      </Group>

      <Group header={<Header mode="secondary">Партнеры хакатона</Header>}>
        <List>
          <Cell expandable before={<Icon28DoneOutline/>}>РУБИКОН</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>SmartBear</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>Senla</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>Веб-интегратор Максимастер</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>Scloud.ru</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>DD Planet</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>Центр информационных технологий</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>SafeCafe</Cell>
          <Cell expandable before={<Icon28DoneOutline/>}>GDG Russia</Cell>
        </List>
      </Group>

      <Group header={<Header mode="secondary">Организаторы хакатона</Header>}>
        <List>
          <Cell expandable before={<Icon28AccessibilityOutline/>}>ВКонтакте</Cell>
        </List>
      </Group>


    </Panel>
);


export default Home;
