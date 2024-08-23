import { useState } from 'react';
import { SimpleButton } from '../common/SimpleButton';
import { PageHeader } from '../common/layout/PageHeader';
import { PageContent } from '../common/layout/PageContent';

type DataItemType = {
  name: string;
  id: string;
};

const GET_USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

export const AsyncTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataItemType[]>([]);

  const handleFetchDataClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(GET_USERS_ENDPOINT);
      const responseData = (await response.json()) as DataItemType[];
      setData(responseData);
      setIsLoading(false);
    } catch (e) {
      throw new Error();
    }
  };

  return (
    <>
      <PageHeader pageTitle="Async Test" />
      <PageContent width="200px">
        <SimpleButton onClick={handleFetchDataClick}>FETCH DATA</SimpleButton>
        {isLoading && <p>Loading</p>}
        {!!data.length &&
          data.map((dataItem) => {
            return (
              <div key={dataItem.id}>
                <p>{dataItem.name}</p>
                <p>------------------</p>
              </div>
            );
          })}
      </PageContent>
    </>
  );
};
