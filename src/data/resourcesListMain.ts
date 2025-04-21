// We'll also add the FreeTools to main resources list so they are accessible.

import type { Resource } from './types';
import { resourcesProgramming } from './resourcesListProgramming';
import { resourcesWebDev } from './resourcesListWebDev';
import { resourcesDataScience } from './resourcesListDataScience';
import { resourcesDevOps } from './resourcesListDevOps';
import { resourcesMobile } from './resourcesListMobile';
import { resourcesCsFundamentals } from './resourcesListCsFundamentals';
import { resourcesFreeTools } from './resourcesListFreeTools';
import { resourcesBlockchain } from './resourcesListBlockchain';
import { resourcesCloudComputing } from './resourcesListCloudComputing';
import { resourcesDigitalForensics } from './resourcesListDigitalForensics';
import { resourcesNetworking } from './resourcesListNetworking';

export const resourcesMain: Resource[] = [
  ...resourcesProgramming,
  ...resourcesWebDev,
  ...resourcesDataScience,
  ...resourcesDevOps,
  ...resourcesMobile,
  ...resourcesCsFundamentals,
  ...resourcesFreeTools,
  ...resourcesBlockchain,
  ...resourcesCloudComputing,
  ...resourcesDigitalForensics,
  ...resourcesNetworking,
];
