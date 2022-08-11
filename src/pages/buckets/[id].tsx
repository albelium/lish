import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainLayout } from '@/components/Layout';

const BucketDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <div>バケットページ：{id}</div>
    </MainLayout>
  );
};

export default BucketDetail;
