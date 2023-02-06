import jsdom from "jsdom";
import request from "axios";

export type DataScrape = {
  questionFrontendId: string;
  titleSlug: string;
  title: string;
};

export type DataState = {
  data: {
    question: {
      questionId: string;
      questionFrontendId: string;
      title: string;
      titleSlug: string;
      isPaidOnly: boolean;
      difficulty: string;
      likes: number;
      dislikes: number;
    };
  };
  dataUpdateCount: number;
  dataUpdatedAt: number;
  error: null;
  errorUpdateCount: number;
  errorUpdatedAt: number;
  fetchFailureCount: number;
  fetchMeta: null;
  isFetching: boolean;
  isInvalidated: boolean;
  isPaused: boolean;
  status: string;
};

export type DataQueries = {
  state: DataState;
  queryKey: any[];
  queryHash: string;
};

export type SiteData = {
  props: {
    pageProps: {
      dehydratedState: {
        queries: DataQueries[];
      };
      _nextI18Next: any;
      revalidate: number;
    };
    __N_SSG: boolean;
  };
  page: string;
  query: any;
  buildId: string;
  isFallback: boolean;
  gsp: boolean;
  scriptLoader: any[];
};

const { JSDOM } = jsdom;

export async function fetchProblemData(
  url: string
): Promise<DataScrape | undefined> {
  if (!url) return;
  try {
    const result = await request.get(url);
    const { data } = result;
    let dom = new JSDOM(data);
    let script = dom.window.document.body.querySelector("#__NEXT_DATA__");
    if (!script) return;
    let test = script.innerHTML;

    let siteData: SiteData = JSON.parse(test);
    let info = siteData.props.pageProps.dehydratedState.queries.find((q) =>
      q.queryHash.includes("questionTitle")
    );
    if (!info) return;
    const { questionFrontendId, titleSlug, title } = info.state.data.question;
    return { questionFrontendId, titleSlug, title };
  } catch (error) {
    console.log(error);
    return;
  }
}
