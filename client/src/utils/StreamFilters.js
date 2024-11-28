export const streamSettings = {
  filters: [
    {
      key: "types",
      name: "Types",
      type: "select",
      values: [
        { key: "movie", name: "Movie" },
        { key: "tv_series", name: "Tv Series" },
        { key: "tv_special", name: "Tv Special" },
        { key: "tv_miniseries", name: "Tv Miniseries" },
        { key: "short_film", name: "Short Film" }
      ]
    },
    {
      key: "source_types",
      name: "Source Types",
      type: "multi_select",
      values: [
        { key: "sub", name: "Subcription" },
        { key: "rent", name: "Rent" },
        { key: "buy", name: "Buy" },
        { key: "free", name: "Free" },
        { key: "tve", name: "Tve" }
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
      key: "user_rating_high",
      name: "User Rating High",
      type: "number",
      min: 0,
      max: 10,
      step: 1
    },
    {
      key: "user_rating_low",
      name: "User Rating Low",
      type: "number",
      min: 0,
      max: 10,
      step: 1
    },
    {
      key: "critic_score_high",
      name: "Critic Score High",
      type: "number",
      min: 0,
      max: 100,
      step: 5
    },
    {
      key: "critic_score_low",
      name: "Critic Score Low",
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