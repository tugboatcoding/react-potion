import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'markdown-to-jsx';
import Box from './Box';
import Collection from './Collection';

storiesOf('Collection', module)
  .add('Default', () => (
    <>
      <Box padding={['14px', '24px', '32px', '48px', '48px']}>
        <Collection
          name="Pubs & bars in London"
          views={[
            {
              id: '5a3fbb4d-4dd0-4acd-a565-d8a02a5afa4a',
              name: 'Default View',
              type: 'table',
            },
            {
              id: '8b0f407b-f9c4-4e6f-8f8e-4c5fe5bd4424',
              name: 'Table',
              type: 'table',
            },
            {
              id: 'e4e4d82f-40b8-4fd9-b4e7-50efdc0c69d3',
              name: 'Gallery',
              type: 'gallery',
            },
            {
              id: 'a0df23fb-402b-4bac-9f20-a461625c6344',
              name: 'List',
              type: 'list',
            },
            {
              id: '451010f3-dfa6-4b3d-99dc-fd07a9284916',
              name: 'Board',
              type: 'board',
            },
          ]}
          cols={[
            {
              value: 'Name',
              type: 'title',
            },
            {
              value: <Markdown>Type</Markdown>,
              type: 'text',
            },
            {
              value: 'Location',
              type: 'multi_select',
            },
            {
              value: 'Good for',
              type: 'multi_select',
            },
            {
              value: <Markdown>Food?</Markdown>,
              type: 'text',
            },
            {
              value: <Markdown>Must reserve?</Markdown>,
              type: 'text',
            },
            {
              value: <Markdown>Busy?</Markdown>,
              type: 'text',
            },
            {
              value: <Markdown>Notes</Markdown>,
              type: 'text',
            },
            {
              value: <Markdown>URL</Markdown>,
              type: 'text',
            },
          ]}
          rows={[
            [
              {
                value: 'Dean Swift',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: 'a4647bf6-3d0f-45dd-af8f-731990913739',
                    color: 'purple',
                    value: 'London Bridge',
                  },
                  {
                    id: '7c5161d9-ddee-4bdf-8582-2a511fc799ff',
                    color: 'pink',
                    value: 'Tower Bridge',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '2df5670a-c675-4850-96aa-fd7c0560a689',
                    color: 'brown',
                    value: 'Pub food',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔🐟🍟'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👤'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>If you want craft beers, Cloudwater is on the 'beer mile' and serves sweet, hoppy IPAs and coffee stouts straight from the brewery</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://cloudwaterbrew.co/location-enid-st](https://cloudwaterbrew.co/location-enid-st)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'Cloudwater',
                type: 'title',
              },
              {
                value: <Markdown>{'Taproom 🍻'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: 'a4647bf6-3d0f-45dd-af8f-731990913739',
                    color: 'purple',
                    value: 'London Bridge',
                  },
                  {
                    id: '7c5161d9-ddee-4bdf-8582-2a511fc799ff',
                    color: 'pink',
                    value: 'Tower Bridge',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '4544d2ab-57ce-4ff2-b7a2-d016ff5fde69',
                    color: 'orange',
                    value: 'Craft beer',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Traditional pub food with old man ales (red ales). Can reserve</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[http://thedeanswift.com/](http://thedeanswift.com/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Garrison',
                type: 'title',
              },
              {
                value: 'Gastropub 🍴',
                type: 'text',
              },
              {
                value: [
                  {
                    id: 'a4647bf6-3d0f-45dd-af8f-731990913739',
                    color: 'purple',
                    value: 'London Bridge',
                  },
                  {
                    id: '7c5161d9-ddee-4bdf-8582-2a511fc799ff',
                    color: 'pink',
                    value: 'Tower Bridge',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '06441be2-dd02-4290-9564-5303e352c1ed',
                    color: 'green',
                    value: 'Gourmet',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: '🥦🐟🥩',
                type: 'text',
              },
              {
                value: '🗓',
                type: 'text',
              },
              {
                value: '👥👤',
                type: 'text',
              },
              {
                value: <Markdown>Gastropub/gourmet dining. Reservation needed</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[http://www.thegarrison.co.uk/](http://www.thegarrison.co.uk/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: "The Horniman at The Hay's Galleria",
                type: 'title',
              },
              {
                value: 'Pub 🍺',
                type: 'text',
              },
              {
                value: [
                  {
                    id: 'a4647bf6-3d0f-45dd-af8f-731990913739',
                    color: 'purple',
                    value: 'London Bridge',
                  },
                  {
                    id: '7c5161d9-ddee-4bdf-8582-2a511fc799ff',
                    color: 'pink',
                    value: 'Tower Bridge',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '807bc036-541e-4e7c-b5d6-1878f886366a',
                    color: 'red',
                    value: 'Scenic',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥👤'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Along the river, with a great view of Tower Bridge. More a spot for drinking a pint on a sunny day with a good view</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.nicholsonspubs.co.uk/restaurants/london/thehornimanathayslondonbridge](https://www.nicholsonspubs.co.uk/restaurants/london/thehornimanathayslondonbridge)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Blue Anchor',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '6b695a45-d5f3-44f8-8e05-736353416fff',
                    color: 'default',
                    value: 'Hammersmith',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '807bc036-541e-4e7c-b5d6-1878f886366a',
                    color: 'red',
                    value: 'Scenic',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔🐟🍟'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Along the river, slightly further out of town, this pub is one of the busy residential pubs in Hammersmith. Lovely on a sunny day</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.blueanchorlondon.com/](https://www.blueanchorlondon.com/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Westminster Arms',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '1479b097-fd83-422c-bdbc-245102582280',
                    color: 'gray',
                    value: 'Westminster',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: 'fb5ab8e9-3ff4-47d2-a9ee-52d43402023a',
                    color: 'gray',
                    value: 'General',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Where politicians go and get booze</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.westminsterarms.co.uk/](https://www.westminsterarms.co.uk/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Ned',
                type: 'title',
              },
              {
                value: <Markdown>{'Bar 🍺🍷'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '93baad10-b105-4af5-9478-cb914ab8c271',
                    color: 'purple',
                    value: 'Bank',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '4264834d-b736-4f2d-acce-c3e130f32c0d',
                    color: 'blue',
                    value: 'Dining',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔🐟🍟'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>A former bank turned into bars and restaurants. Very ornate interior, with emerald green leather seating, and live band occasionally playing live music in the middle of The City</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.thened.com/restaurants](https://www.thened.com/restaurants)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'Royal Oak',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '231397b8-4b11-4264-9d90-808db9521d1f',
                    color: 'yellow',
                    value: 'Borough',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '2df5670a-c675-4850-96aa-fd7c0560a689',
                    color: 'brown',
                    value: 'Pub food',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔🐟🍟'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👤'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Traditional pub with a good scotch egg. Can reserve</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://royaloaklondon.co.uk/](https://royaloaklondon.co.uk/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Windsor Castle',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '544f376b-1397-47c3-bc0c-3a23aec54cdc',
                    color: 'blue',
                    value: 'High Street Kensington',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '2df5670a-c675-4850-96aa-fd7c0560a689',
                    color: 'brown',
                    value: 'Pub food',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔🐟🍟'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Traditional pub with good dining, tucked away in Kensington. Serves old man ales (red ales)</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.thewindsorcastlekensington.co.uk/](https://www.thewindsorcastlekensington.co.uk/?utm_source=google&utm_medium=organic&utm_campaign=gmb)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: "Mr. Fogg's Residence",
                type: 'title',
              },
              {
                value: <Markdown>{'Cocktail bar 🍺🍷'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '0216517d-fc5f-4835-96cd-d7c12331054e',
                    color: 'green',
                    value: 'Piccadilly',
                  },
                  {
                    id: '4e0b2ff3-aeeb-4ff4-81de-f84f628ee0cb',
                    color: 'red',
                    value: 'Green Park',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '98e4252d-e2e7-4293-8180-4ba121359d3d',
                    color: 'pink',
                    value: 'Cocktails',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🥪'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥👤'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Lovely bar themed after and inspired by Mr. Fogg's 80 days around the world. Expect a charming experience. Try other Mr. Fogg's bars too (e.g. Gin Parlour, Tavern or House of Botanicals). Can reserve</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.mr-foggs.com/mr-foggs-residence/](https://www.mr-foggs.com/mr-foggs-residence/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: "Gordon's wine bar",
                type: 'title',
              },
              {
                value: <Markdown>{'Wine bar 🍷'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '80ccf65e-3e03-4c30-b652-507b847a9f96',
                    color: 'brown',
                    value: 'Embankment',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: 'e0826920-d11e-49a6-8c76-7e9a228a4c69',
                    color: 'blue',
                    value: 'Wine',
                  },
                  {
                    id: '77efece0-40e6-4014-be5c-5ecacafff518',
                    color: 'purple',
                    value: 'Cheese',
                  },
                  {
                    id: '77efece0-40e6-4014-be5c-5ecacafff518',
                    color: 'purple',
                    value: 'Cheese',
                  },
                  {
                    id: '77efece0-40e6-4014-be5c-5ecacafff518',
                    color: 'purple',
                    value: 'Cheese',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🧀'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥👤'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Dark, under archways, drink wine in a candle lit, dungeon-like place. Recommend a cheese board too</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://gordonswinebar.com/gallery/](https://gordonswinebar.com/gallery/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Builders Arms',
                type: 'title',
              },
              {
                value: <Markdown>{'Pub 🍺'}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '544f376b-1397-47c3-bc0c-3a23aec54cdc',
                    color: 'blue',
                    value: 'High Street Kensington',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: 'ef760775-d9b8-4ef8-9b14-9db540b939c2',
                    color: 'red',
                    value: 'Burger',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🍔'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Quaint, pretty, little pub in Kensington. Can reserve</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://www.thebuildersarmskensington.co.u](https://www.thebuildersarmskensington.co.u/)</Markdown>,
                type: 'text',
              },
            ],
            [
              {
                value: 'The Princess Arms',
                type: 'title',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: [
                  {
                    id: '3650bb3e-8e66-42f9-9a07-6018da0a86ea',
                    color: 'orange',
                    value: 'Shoreditch',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: [
                  {
                    id: '06441be2-dd02-4290-9564-5303e352c1ed',
                    color: 'green',
                    value: 'Gourmet',
                  },
                ],
                type: 'multi_select',
              },
              {
                value: <Markdown>{'🥦🐟🥩'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{''}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>{'👥'}</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>Fairly new pub serving gourmet food</Markdown>,
                type: 'text',
              },
              {
                value: <Markdown>[https://theprincessofshoreditch.com/](https://theprincessofshoreditch.com/)</Markdown>,
                type: 'text',
              },
            ],
          ]}
        />
      </Box>
    </>
  ));
