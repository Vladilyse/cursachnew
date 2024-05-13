import { InputAdornment, TextField } from "@mui/material";
import { Magnify } from "@/components/common/icons/Magnify";
import * as styles from "./SearchBox.styles";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value || e.target.value === "") {
      setSearchParams({});
      return;
    }
    setSearchParams({ search: e.target.value });
  };

  return (
    <TextField
      variant="outlined"
      sx={styles.searchBox}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Magnify fill="#222" />
          </InputAdornment>
        ),
      }}
      onChange={(e) => handleSearch(e)}
      placeholder="Search for the poll"
    />
  );
};

export default SearchBox;
