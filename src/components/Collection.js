import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import Heading from './Heading';
import Text from './Text';
import chevron from '../assets/images/chevron.png';
import page from '../assets/images/page.png';
import table from '../assets/images/table.png';
import board from '../assets/images/board.png';
import list from '../assets/images/list.png';
import gallery from '../assets/images/gallery.png';
import tray from '../assets/images/tray.png';
import title from '../assets/images/title.png';
import text from '../assets/images/text.png';
import multiSelect from '../assets/images/multi-select.png';

const findSelectColIdx = (cols) => cols.findIndex((col) => ['select', 'multi_select'].includes(col.type));

const TableText = styled(Text)`
  font-size: 14px;
`;

const CellOuter = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 8px;
  min-height: 32px;
  ${({ width }) => (width ? `width: ${width}px;` : '')}
  max-width: 313px;
  ${({ border = true }) => (border ? 'border-right: 1px solid rgba(55, 53, 47, 0.09);' : '')}
`;

const ColOuter = styled(CellOuter)`
  height: 32px;
`;

const ColInner = styled(TableText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 120%;
  color: rgba(55, 53, 47, 0.6);
`;

const Col = ({
  type, value, border = true, width,
}) => (
  <ColOuter border={border} width={width}>
    <Flex alignItems="center">
      <Box mr="4px">
        {type === 'title' && (
          <img alt="Title" src={title} width="16" height="12" />
        )}
        {type === 'text' && (
          <img alt="Text" src={text} width="16" height="12" />
        )}
        {type === 'multi_select' && (
          <img alt="Multi-select" src={multiSelect} width="14" height="12" />
        )}
      </Box>
      <ColInner>
        {value}
      </ColInner>
    </Flex>
  </ColOuter>
);

const Row = styled(Flex)`
  color: rgba(55, 53, 47, 0.6);
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`;

const CountOuter = styled(Text)`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(55, 53, 47, 0.6);
  margin-top: 2px;
  margin-right: 4px;
  white-space: nowrap;
`;

const CellText = styled(TableText)`
  word-break: break-word;
`;

const COLORS = {
  brown: 'rgba(140, 46, 0, 0.2)',
  orange: 'rgba(245, 93, 0, 0.2)',
  purple: 'rgba(103, 36, 222, 0.2)',
  gray: 'rgba(155, 154, 151, 0.4)',
  red: 'rgba(255, 0, 26, 0.2)',
  pink: 'rgba(221, 0, 129, 0.2)',
  green: 'rgba(0, 135, 107, 0.2)',
  blue: 'rgba(0, 120, 223, 0.2)',
};

const getBgColor = (color) => COLORS[color] || 'rgba(206, 205, 202, 0.5)';

const TagOuter = styled.div`
  display: flex;
  align-items: center;
  min-width: 0px;
  border-radius: 3px;
  padding: 0 6px;
  line-height: 120%;
  color: rgb(55, 53, 47);
  margin: 0px 6px 6px 0px;
  background-color: ${({ color }) => getBgColor(color)};
`;

const TagText = styled(CellText)`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Footer = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: -1px;
  height: 33px;
`;

const Tag = ({ color, value }) => (
  <TagOuter color={color}><TagText>{value}</TagText></TagOuter>
);

const Cell = ({
  value, type, border = true, width,
}) => {
  let body;
  switch (type) {
  case 'count':
    body = (
      <Flex alignItems="center" justifyContent="flex-end" width="100%">
        <CountOuter>COUNT</CountOuter><CellText>{value}</CellText>
      </Flex>
    );
    break;
  case 'title':
  case 'text':
    body = <CellText>{value}</CellText>;
    break;
  case 'select':
    body = (
      <Box pt="7px" pb="1px">
        <Flex alignItems="center" flexWrap="wrap">
          <Tag value={value} />
        </Flex>
      </Box>
    );
    break;
  case 'multi_select':
    body = (
      <Box pt="7px" pb="1px">
        <Flex alignItems="center" flexWrap="wrap">
          {(value && value.map((tag, idx) => (
            <Box mr={idx === value.length - 1 ? 0 : `${CHAR_WIDTH}px`}>
              <Tag color={tag.color} value={tag.value} />
            </Box>
          )))}
        </Flex>
      </Box>
    );
    break;
  default:
    body = null;
    break;
  }
  return (
    <CellOuter border={border} width={width}>
      {body}
    </CellOuter>
  );
};

const CHAR_WIDTH = 8;
const TAG_PADDING = 2; // 2 characters.

const getLength = (cell) => {
  const { value } = cell;
  const length = typeof value === 'string'
    ? value.length
    : (
      (
        (
          value.props && (
            (value.props.children && value.props.children.length)
            || (value.props.source && value.props.source.length)
          )
        )
      ) || 8
    );
  return length;
};

const TableInner = styled.div`
  overflow: scroll;
`;

const Table = ({
  cols = [],
  rows = [],
}) => {
  const colLengths = cols.map((col) => getLength(col) + 3);
  const maxLengths = rows.reduce((acc, row) => {
    const lengths = row.map((cell) => {
      if (Array.isArray(cell.value)) {
        const { length } = cell.value;
        const padding = length * TAG_PADDING + (length - 1);
        return padding + cell.value.reduce((memo, tag) => memo + tag.value.length, 0);
      }
      return getLength(cell);
    });
    return acc.map((prev, idx) => Math.max(prev, lengths[idx]));
  }, colLengths);
  return (
    <div className="react-potion-table">
      <TableInner>
        <Row>
          {cols.map((col, colIdx) => (
            <Col
              key={colIdx}
              type={col.type}
              value={col.value}
              border={colIdx !== cols.length - 1}
              width={maxLengths[colIdx] * CHAR_WIDTH}
            />
          ))}
        </Row>
        {rows.map((row, rowIdx) => (
          <Row key={rowIdx}>
            {row && row.map((cell, cellIdx) => (
              <Cell
                key={cellIdx}
                border={cellIdx !== row.length - 1}
                width={maxLengths[cellIdx] * CHAR_WIDTH}
                {...cell}
              />
            ))}
          </Row>
        ))}
      </TableInner>
      <Footer>
        <Cell
          border={false}
          type="count"
          value={rows.length}
          width={maxLengths[0] * CHAR_WIDTH}
        />
      </Footer>
    </div>
  );
};

const CollectionBar = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
`;

const Clickable = styled.div`
  cursor: pointer;
  transition: background 20ms ease-in 0s;
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`;

const ViewToggleOuter = styled(Clickable)`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  height: 24px;
  border-radius: 3px;
  min-width: 46px;
  margin-right: 8px;
`;

const ToggleText = styled(TableText)`
  line-height: 20px;
  color: rgb(55, 53, 47);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 6px;
  margin-right: 4px;
  font-weight: 600;
`;

const PickerOuter = styled.div`
  position: relative;
`;

const Picker = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  border-radius: 3px;
  background: white;
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  min-width: 340px;
  max-width: 400px;
`;

const PickerTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  min-height: 28px;
`;

const PickerTitleCollectionName = styled(TableText)`
  margin-left: 4px;
  font-weight: 600;
`;

const ViewIcon = ({ type }) => (
  <>
    {type === 'table' && <img alt="Table" src={table} width="14" height="14" />}
    {type === 'gallery' && <img alt="Gallery" src={gallery} width="14" height="14" />}
    {type === 'list' && <img alt="List" src={list} width="14" height="14" />}
    {type === 'board' && <img alt="Board" src={board} width="14" height="14" />}
  </>
);

const ViewOuter = styled(Clickable)`
  display: flex;
  align-items: center;
  min-height: 28px;
`;

const ViewToggle = ({
  name, views, viewIdx, setViewIdx,
}) => {
  const ref = useRef(null);
  const [pickerOpen, setPickerOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        // Clicked outside
        setPickerOpen(!pickerOpen);
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [pickerOpen, setPickerOpen, ref]);

  return (
    <div>
      {views.length === 1 && (
        <Heading size={600}>
          {name}
        </Heading>
      )}
      {views.length > 1 && (
        <ViewToggleOuter onClick={() => setPickerOpen(true)}>
          <Box px="6px">
            <Flex alignItems="center">
              <ViewIcon type={views[viewIdx].type} />
              <ToggleText>{views[viewIdx].name}</ToggleText>
              <img alt="Toggle" src={chevron} width="10" height="6" />
            </Flex>
          </Box>
        </ViewToggleOuter>
      )}
      {pickerOpen && (
        <PickerOuter ref={ref}>
          <Picker>
            <Box ml="14px">
              <PickerTitle>
                <TableText>
                  Views for
                </TableText>
                <PickerTitleCollectionName>
                  {name}
                </PickerTitleCollectionName>
              </PickerTitle>
            </Box>
            <Box py="6px">
              {views && views.map((view, vIdx) => (
                <ViewOuter key={vIdx} onClick={() => {
                  setViewIdx(vIdx);
                  setPickerOpen(false);
                }}>
                  <Box ml="14px">
                    <Flex alignItems="center">
                      <ViewIcon type={view.type} />
                      <Box ml="8px" mr="14px">
                        <TableText>
                          {view.name}
                        </TableText>
                      </Box>
                    </Flex>
                  </Box>
                </ViewOuter>
              ))}
            </Box>
          </Picker>
        </PickerOuter>
      )}
    </div>
  );
};

const Page = styled(Clickable)`
  display: flex;
  min-height: 30px;
  border-radius: 3px;
`;

const PageIcon = styled(Clickable)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-left: 2px;
  margin-right: 6px;
`;

const ListItemText = styled.div`
  min-width: 240px;
`;

const List = ({ cols = [], rows = [] }) => {
  const selectColIdx = findSelectColIdx(cols);
  return (
    <div className="react-potion-list">
      {rows.map((row, rowIdx) => {
        const selectCol = selectColIdx >= 0 ? row[selectColIdx] : null;
        const t = row.find((cell) => cell.type === 'title');
        return (
          <Page key={rowIdx}>
            <Flex justifyContent="space-between" width="100%">
              <Flex alignItems="center">
                <PageIcon>
                  <img alt="Page" src={page} width="16" height="20" />
                </PageIcon>
                <Box pr="8px">
                  <ListItemText>
                    <Text>
                      {t && t.value}
                    </Text>
                  </ListItemText>
                </Box>
              </Flex>
              {selectCol && (
                <Cell
                  border={false}
                  type={selectCol.type}
                  value={selectCol.value}
                />
              )}
            </Flex>
          </Page>
        );
      })}
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 1fr;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const Card = styled(Clickable)`
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 3px;
  background: white;
  overflow: hidden;
  transition: background 100ms ease-out 0s;
`;

const GalleryItemText = styled(Text)`
  white-space: nowrap;
  font-size: 14px;
  line-height: 1.5;
  min-height: 21px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Gallery = ({ rows = [] }) => (
  <div className="react-potion-gallery">
    <Grid>
      {rows.map((row, rowIdx) => {
        const t = row.find((cell) => cell.type === 'title');
        return (
          <Card key={rowIdx}>
            <Box minHeight="155px"></Box>
            <Box py="8px" px="10px">
              <GalleryItemText>{t && t.value}</GalleryItemText>
            </Box>
          </Card>
        );
      })}
    </Grid>
  </div>
);

const Board = ({ cols = [], rows = [] }) => {
  const selectColIdx = findSelectColIdx(cols);

  let tagRowsById;
  if (selectColIdx >= 0) {
    tagRowsById = rows.reduce((acc, row, rowIdx) => {
      const selectCol = row[selectColIdx];
      if (selectCol.value.length > 0) {
        const tagIds = selectCol.value.map((v) => v.id);

        return tagIds.reduce((memo, tagId) => ({
          ...memo,
          [tagId]: {
            id: tagId,
            rows: memo[tagId]
              ? [...memo[tagId].rows, rowIdx]
              : [rowIdx],
          },
        }), acc);
      }

      return {
        ...acc,
        none: {
          id: 'none',
          rows: [...acc.none.rows, rowIdx],
        },
      };
    }, {
      none: {
        id: 'none',
        rows: [],
      },
    });
  } else {
    tagRowsById = {
      none: {
        id: 'none',
        rows: rows.map((row, rowIdx) => rowIdx),
      },
    };
  }

  const {
    none,
    ...tags
  } = tagRowsById;

  const boardColumns = [
    none,
    // Most tagged first.
    ...Object.values(tags).sort((a, b) => (
      b.rows.length - a.rows.length)),
  ];

  const allTags = rows
    .map((row) => (selectColIdx >= 0 ? row[selectColIdx].value : undefined))
    .filter(Boolean)
    .reduce((acc, vs) => [...acc, ...vs], [])
    .reduce((acc, tag) => ({
      ...acc,
      [tag.id]: tag,
    }), {});

  return (
    <Flex className="react-potion-board">
      {boardColumns.map((boardCol) => {
        const tag = allTags[boardCol.id];
        return (
          <Box key={boardCol.id} minWidth="260px" pr="16px">
            {boardCol.id === 'none' && (
              <Flex alignItems="center" height="44px">
                <Flex px="6px" alignItems="center">
                  <img alt="Tray" src={tray} width="14" height="14" />
                </Flex>
                <TableText>No Location</TableText>
              </Flex>
            )}
            {boardCol.id !== 'none' && tag && (
              <Flex alignItems="center" height="44px">
                <Tag color={tag.color} value={tag.value} />
              </Flex>
            )}
            {boardCol.rows.map((rowIdx) => (
              <Box mb="8px">
                <Card key={rowIdx}>
                  <Box py="8px" px="10px">
                    <GalleryItemText>{rows[rowIdx] && rows[rowIdx][0].value}</GalleryItemText>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        );
      })}
    </Flex>
  );
};

const Collection = ({
  name,
  views,
  cols,
  rows,
}) => {
  const [viewIdx, setViewIdx] = useState(0);
  const view = views[viewIdx];

  return (
    <div className="react-potion-collection">
      <CollectionBar>
        <ViewToggle name={name} views={views} viewIdx={viewIdx} setViewIdx={setViewIdx} />
      </CollectionBar>
      {view.type === 'table' && <Table cols={cols} rows={rows} />}
      {view.type === 'list' && <Box mt="8px"><List cols={cols} rows={rows} /></Box>}
      {view.type === 'gallery' && <Gallery cols={cols} rows={rows} />}
      {view.type === 'board' && <Box mt="8px"><Board cols={cols} rows={rows} /></Box>}
    </div>
  );
};

export default Collection;
