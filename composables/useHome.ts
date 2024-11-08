interface News {
  _id: string;
  title: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface NewsData {
  result: News[];
}

export const useHome = () => {
  const newsList = ref<News[]>([]);
  const isLoading = ref(false);

  const runtimeConfig = useRuntimeConfig();
  const apiBaseURL = runtimeConfig.public.apiBaseUrl;

  const getNewsList = async () => {
    isLoading.value = true;

    try {
      const { result } = await $fetch<NewsData>(`${apiBaseURL}/home/news/`);
      newsList.value = result;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return { newsList, getNewsList, isLoading };
};
