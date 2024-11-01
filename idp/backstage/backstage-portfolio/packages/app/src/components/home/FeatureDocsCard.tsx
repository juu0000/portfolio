import React from 'react';
import { FeaturedDocsCard } from '@backstage/plugin-home';

export const HomeFeaturedDocsCard = () => {
    return (
        <FeaturedDocsCard title="백스테이지를 소개합니다."
          filter={{
              'spec.type': 'service',
              'metadata.name': 'backstage-portfolio',
          }}
        />
    );
};

// export const HomeFeaturedDocsCard = () => {
//     return (
//         <FeaturedDocsCard title="백스테이지를 시작하는법"
//           filter={{
//               'spec.type': 'service',
//               'metadata.name': 'backstage',
//           }}
//         />
//     );
// };