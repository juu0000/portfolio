// Base imports to build the home page
import {
    HomePageToolkit,
    HomePageCompanyLogo,
    HomePageStarredEntities,
    TemplateBackstageLogo
} from '@backstage/plugin-home';
import { Content, Page,} from '@backstage/core-components';
import {Grid, GridProps,makeStyles, } from '@material-ui/core';
import React from 'react';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { HomePageSearchBar } from '@backstage/plugin-search';
// Icon import
import GrafanaIcon from '../../assets/icons/grafana.png';
import ArgocdIcon from '../../assets/icons/argocd.png';
import ConfleunceIcon from '../../assets/icons/confluence.png';
import JiraIcon from '../../assets/icons/jira.png';
import ElasticSearchIcon from '../../assets/icons/elasticSearch.png';
// Top, Recently Visited
import { HomePageRecentlyVisited, HomePageTopVisited} from "@backstage/plugin-home";
// Docs
import { HomeFeaturedDocsCard} from "./FeatureDocsCard";

// Styles
const useStyles = makeStyles(theme => ({
    searchBarInput: {
        maxWidth: '60vw',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50px',
        boxShadow: theme.shadows[1],
    },
    searchBarOutline: {
        borderStyle: 'none',
    },
}));

const useLogoStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(5, 0),
    },
    svg: {
        width: 'auto',
        height: 100,
    },
    path: {
        fill: '#7df3e1',
    },
}));


export const HomePage = () => {
    const classes = useStyles();
    const { svg, path, container } = useLogoStyles();

    // Direct links to useful locations, which you can change to whatever you want
    const tools = [
        {
            url: 'https://grafana-dev.portfolio.xyz',
            label: 'Grafana Dev',
            icon: <img src={GrafanaIcon} alt="Grafana" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://grafana.portfolio.xyz',
            label: 'Grafana Prod',
            icon: <img src={GrafanaIcon} alt="Grafana" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://argocd-dev.portfolio.xyz',
            label: 'ArgoCd Dev',
            icon: <img src={ArgocdIcon} alt="ArgoCd" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://argocd.portfolio.xyz',
            label: 'ArgoCd Prod',
            icon: <img src={ArgocdIcon} alt="ArgoCd" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://kibana.portfolio.xyz',
            label: 'OpenSearch',
            icon: <img src={ElasticSearchIcon} alt="OpenSearch" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://wiki.portfolio.xyz',
            label: 'Confluence Wiki',
            icon: <img src={ConfleunceIcon} alt="Confleunce" style={{width: '30px', height: '30px'}}/>,
        },
        {
            url: 'https://jira.portfolio.xyz',
            label: 'Jira',
            icon: <img src={JiraIcon} alt="Jira" style={{width: '30px', height: '30px'}}/>,
        },
    ];

    interface Section {
        component: React.ComponentType<any>;
        gridProps: GridProps;
        props: Record<string, any>;
    }

    const sections:Section[] = [
        {
            component: HomePageStarredEntities,
            gridProps: { xs: 12, md: 4 },
            props: {
                title: "즐겨 찾기 목록",
                noStarredEntitiesMessage: "별 표시를 클릭한 항목이 이곳에 출력 됩니다.",
            },
        },
        {
            component: HomePageRecentlyVisited,
            gridProps: { xs: 12, md: 4 },
            props: {
                title: "최근에 찾은 항목",
            },
        },
        {
            component: HomePageTopVisited,
            gridProps: { xs: 12, md: 4 },
            props: {
                title: "가장 많이 찾은 항목",
            },
        },
    ];

    // Use the search bar and starred entities as is
    return (
        <SearchContextProvider>
            <Page themeId="home">
                <Content>
                    <Grid container justifyContent="center" spacing={6}>
                        <HomePageCompanyLogo
                            className={container}
                            logo={<TemplateBackstageLogo classes={{ svg, path }} />}
                        />
                        <Grid container item xs={12} justifyContent="center">
                            <HomePageSearchBar
                                InputProps={{
                                    classes: { root: classes.searchBarInput, notchedOutline: classes.searchBarOutline },
                                }}
                                placeholder="Search"
                            />
                        </Grid>

                        <Grid container item xs={12}>
                            <Grid item xs={12} md={6}>
                                <HomeFeaturedDocsCard />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <HomePageToolkit tools={tools} title="툴 외부링크" />
                            </Grid>
                            {sections.map((section, index) => {
                                const { component: SectionComponent, gridProps, props } = section;
                                return (
                                    <Grid item key={index} {...gridProps}>
                                        <SectionComponent {...props} />

                                    </Grid>
                                );
                            })}
                        </Grid>

                        {/*<Grid container item xs={12}>*/}
                        {/*    <Grid item xs={12} md={6}>*/}
                        {/*        <HomePageStarredEntities*/}
                        {/*            title="" noStarredEntitiesMessage=""*/}
                        {/*        />*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item xs={12} md={6}>*/}
                        {/*        <HomePageToolkit tools={tools}/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item xs={12}>*/}

                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Content>
            </Page>
        </SearchContextProvider>
    );
};  