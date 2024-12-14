export const streamSettings = {
  filters: [
    {
      key: "types",
      name: "Types",
      type: "multi_select",
      values: [
        { key: "movie,short_film", name: "Movie" },
        { key: "tv_series,tv_special,tv_miniseries", name: "Tv Series" },
      ]
    },
    {
      key: "source_types",
      name: "Source Types",
      type: "multi_select",
      values: [
        { key: "sub,free,tve", name: "Stream" },
        { key: "rent", name: "Rent" },
        { key: "buy", name: "Buy" },
      ]
    },
    {
      key: "source_ids",
      name: "Sources",
      type: "multi_select",
      values: []
    },
    {
      key: "genres",
      name: "Genres",
      type: "multi_select",
      values: []
    },
    {
      key: "sort_by",
      name: "Sort By",
      type: "select",
      values: [
        { key: "relevance_desc", name: "Relevance" },
        { key: "popularity_desc", name: "Popularity" },
        { key: "release_date_desc", name: "Oldest" },
        { key: "release_date_asc", name: "Newest" },
        { key: "title_asc", name: "Title A-Z" },
        { key: "title_desc", name: "Title Z-A" },
      ]
    },
    {
      key: "release_date_start",
      name: "Date Start",
      type: "date",
    },
    {
      key: "release_date_end",
      name: "Date End",
      type: "date",
    },
    {
      key: "user_rating_low",
      name: "Min. User Rating",
      type: "number",
      min: 0,
      max: 10,
      step: 1
    },
    {
      key: "critic_score_low",
      name: "Min. Critic Score",
      type: "number",
      min: 0,
      max: 100,
      step: 5
    },
  ],
  display: {
    initial: 1,
    step: 1
  },
};