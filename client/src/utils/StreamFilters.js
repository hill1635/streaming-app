export const streamFilters = [
  {
    name: "types",
    label: "Types",
    type: "multi_select",
    values: ["movie", "tv_series", "tv_special", "tv_miniseries", "short_film"]
  },
  {
    name: "source_types",
    label: "Source Types",
    type: "multi_select",
    values: ["sub", "rent", "buy", "free", "tve"]
  },
  {
    name: "source_ids",
    label: "Sources",
    type: "multi_select",
    values: []
  },
  {
    name: "genres",
    label: "Genres",
    type: "multi_select",
    values: []
  },
  {
    name: "network_ids",
    label: "Networks",
    type: "multi_select",
    values: []
  },
  {
    name: "sort_by",
    label: "Sort By",
    type: "select",
    values: ["relevance_desc", "relevance_asc", "popularity_desc", "popularity_asc", "release_date_desc", "release_date_asc", "title_desc", "title_asc"]
  },
  {
    name: "release_date_start",
    label: "Release Date Start",
    type: "date",
    values: []
  },
  {
    name: "release_date_end",
    label: "Release Date End",
    type: "date",
    values: []
  },
  {
    name: "user_rating_high",
    label: "User Rating High",
    type: "number",
    values: []
  },
  {
    name: "user_rating_low",
    label: "User Rating Low",
    type: "number",
    values: []
  },
  {
    name: "critic_score_high",
    label: "Critic Score High",
    type: "number",
    values: []
  },
  {
    name: "critic_score_low",
    label: "Critic Score Low",
    type: "number",
    values: []
  },
  {
    name: "limit",
    label: "Limit",
    type: "number",
    values: []
  }
];