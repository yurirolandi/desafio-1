import { requestCard } from "./api";

export const insightsServices = {
  getInsights: () => {
    const url = "/api/";

    return requestCard.get(url).then((response) => response.data);
  },
  createInsights: (body) => {
    const url = "/api/";

    return requestCard.post(url, body).then((response) => response.data);
  },
  updateInsights: (id, body) => {
    const url = `/api/Update/${id}`;

    return requestCard.put(url, body).then((response) => response.data);
  },
  deleteInsights: (id) => {
    const url = `/api/Delete/${id}`;
    return requestCard.delete(url).then((response) => response.data);
  },
};
