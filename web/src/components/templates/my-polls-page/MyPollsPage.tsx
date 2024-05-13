import { Grid } from "@mui/material";
import Poll from "@/components/common/shared/poll";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PollAPI from "@/lib/api/poll/PollAPI";
import { useEffect } from "react";

const MyPollsPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data, refetch } = useQuery({
    queryKey: ["my-polls", { search }],
    queryFn: () => PollAPI.getMyPolls({ search: search || undefined }),
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

export default MyPollsPage;
