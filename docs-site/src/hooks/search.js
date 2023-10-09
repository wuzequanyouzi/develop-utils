import { ref } from "vue";
const searchKey = ref("");
const useSearch = () => {
  const updateSearchKey = (key) => {
    searchKey.value = key;
  }
  return {
    searchKey,
    updateSearchKey
  };
};

export default useSearch;