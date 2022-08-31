import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { MainLayout } from '@/components/Layout';
import { supabase } from '@/lib/supabaseClient';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [bucketItems, setBucketItems] = useState<any[] | null>();
  const [errorMessage, setErrorMessage] = useState<string | null>();

  useEffect(() => {
    (async () => {
      const { data: bucket_items, error } = await supabase.from('bucket_items').select('*');
      setBucketItems(bucket_items);
      setErrorMessage(error?.message);
    })();
  }, []);

  if (errorMessage) {
    return <MainLayout>{errorMessage}</MainLayout>;
  }

  if (!bucketItems) {
    return <MainLayout>取得中...</MainLayout>;
  }

  return (
    <MainLayout>
      <div>トップページ</div>
      {bucketItems.map((item) => (
        <p key={item['id']}>{item['label']}</p>
      ))}
    </MainLayout>
  );
};

export default Home;
