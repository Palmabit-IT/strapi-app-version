/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { SettingsPageTitle } from '@strapi/helper-plugin';
import { HeaderLayout, Layout, ContentLayout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Main } from '@strapi/design-system/Main';
import packageJson from '../../../../../../../package.json';

const HomePage = () => {
  return (
    <Layout>
      <SettingsPageTitle name="App Version" />
      <Main>
        <HeaderLayout
          title="App Version"
          subtitle=""
        />
      </Main>
      <ContentLayout>
        <EmptyStateLayout icon={<div />} content={`App version ${packageJson.version || '---'}`} />
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
