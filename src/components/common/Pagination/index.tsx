import styled from 'styled-components';
import { gatNumberArray } from '../../../utils';
import React, { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { IconButton } from '../IconButton';

const PaginationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PageNumber = styled.div<{ $isCurrent: boolean }>`
  cursor: pointer;
  font-weight: ${({ $isCurrent }) => ($isCurrent ? 'bold' : 'normal')};
  border: 3px solid ${({ $isCurrent }) => ($isCurrent ? 'white' : 'none')};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const ArrowIcon = styled(IconButton)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  &:hover {
    border: 3px solid white;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  setCurrentPage
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = gatNumberArray(pagesCount);

  const portionSize = 10;

  const [portionNumber, setPortionNumber] = useState(1);

  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <PaginationBlock>
      {portionNumber > 1 && (
        <ArrowIcon
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
          Icon={LuChevronLeft}
        />
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((page) => (
          <PageNumber
            $isCurrent={currentPage === page}
            key={page}
            onClick={(e) => {
              setCurrentPage(page);
            }}
          >
            <span>{page}</span>
          </PageNumber>
        ))}

      {portionCount > portionNumber && (
        <ArrowIcon
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
          Icon={LuChevronRight}
        />
      )}
    </PaginationBlock>
  );
};

export default Pagination;
