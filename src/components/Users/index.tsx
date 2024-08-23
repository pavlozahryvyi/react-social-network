import { User } from './User';
import Pagination from '../common/Pagination';
import { useSelector } from 'react-redux';
import { UsersSearchForm } from './UsersSearchForm';
import Preloader from '../common/Preloader/Preloader';
import { useGetUsersDataQuery } from '../../features/api/usersApiSlice';
import { TypeUser, TypeUsersFilter } from '../../types/usersTypes';
import { getFilter } from '../../selectors/filtersSelector';
import { getPage } from '../../selectors/pagesSelector';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { pageSet as reducerPageSet } from '../../features/pagesSlice';
import { TypePage } from '../../types/commonTypes';
import { PageHeader } from '../common/layout/PageHeader';
import styled from 'styled-components';

const HeaderOptions = styled.div`
  display: flex;
`;

const UsersWrapper = styled.div`
  height: calc(100% - 50px - 20px);
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

type TypeParams = {
  id: number;
  filters: TypeUsersFilter;
  page: TypePage;
};

type TypeHandler = ({ id, filters, page }: TypeParams) => any;

export const Users: React.FC = () => {
  const [pageSet] = useCustomDispatch([reducerPageSet]);

  const page = useSelector((state) => getPage(state, 'users'));
  const filters = useSelector((state) => getFilter(state, 'users'));

  const { data, isFetching } = useGetUsersDataQuery({
    ...filters,
    page,
    count: 16
  });

  const handleFollowing = (handler: TypeHandler, id: number) => {
    handler({ id, filters, page });
  };

  const setPage = (page: number) => {
    pageSet({ page, pageType: 'users' });
  };

  if (isFetching) return <Preloader />;

  const { items, totalCount } = data;

  return (
    <>
      <PageHeader pageTitle="People">
        <HeaderOptions>
          <Pagination
            totalItemsCount={totalCount}
            pageSize={items.length}
            currentPage={page}
            setCurrentPage={setPage}
          />
          <UsersSearchForm initialValues={filters} disabled={isFetching} />
        </HeaderOptions>
      </PageHeader>
      <UsersWrapper>
        {items.map((user: TypeUser) => (
          <User key={user.id} user={user} onClick={handleFollowing} />
        ))}
      </UsersWrapper>
    </>
  );
};
