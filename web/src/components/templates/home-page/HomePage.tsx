import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Poll from "../../common/shared/poll";
import PollAPI from "@/lib/api/poll/PollAPI";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data, refetch } = useQuery({
    queryKey: ["polls", { search }],
    queryFn: () => PollAPI.getPolls({ search: search || undefined }),
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    refetch();
  }, [search, refetch]);

  return (
    <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {data?.map((poll) => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </Grid>
  );
};

export default HomePage;
