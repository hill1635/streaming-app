export const streamFilters = [
  {
    key: "types",
    name: "Types",
    type: "multi_select",
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
    key: "network_ids",
    name: "Networks",
    type: "multi_select",
    values: []
  },
  {
    key: "sort_by",
    name: "Sort By",
    type: "select",
    values: [
      { key: "relevance_desc", name: "Relevance Desc" },
      { key: "relevance_asc", name: "Relevance Asc" },
      { key: "popularity_desc", name: "Popularity Desc" },
      { key: "popularity_asc", name: "Popularity Asc" },
      { key: "release_date_desc", name: "Release Date Desc" },
      { key: "release_date_asc", name: "Release Date Asc" },
      { key: "title_desc", name: "Title Desc" },
      { key: "title_asc", name: "Title Asc" }
    ]
  },
  {
    key: "release_date_start",
    name: "Release Date Start",
    type: "date",
  },
  {
    key: "release_date_end",
    name: "Release Date End",
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
  {
    key: "limit",
    name: "Limit",
    type: "number",
    min: 0,
    max: 100,
    step: 5
  },
  {
    key: "display",
    name: "Display",
    type: "number",
    min: 0,
    max: 10,
    step: 1
  }
];