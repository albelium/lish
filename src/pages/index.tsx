import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { MainLayout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>トップページ</div>
    </MainLayout>
  );
};

export default Home;
