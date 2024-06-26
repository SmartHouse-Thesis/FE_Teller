import axiosClient, { axiosFormClient } from "../axiosClient";
import { END_POINT_API } from "../endpoint";

const contractAPI = {
  getNewContract: (status) => {
    return axiosClient.get(
      `${END_POINT_API.NEW_CONTRACT}?status=${status}`
    );
  },
  getNewContractById: (contractId) => {
    return axiosClient.get(
      `${END_POINT_API.NEW_CONTRACT}/${contractId}`
    );
  },
  getDepositedContract: () => {
    return axiosClient.get(
        `${END_POINT_API.NEW_CONTRACT}`
      );
  },
  createContract: (params) => axiosClient.post(`${END_POINT_API.NEW_CONTRACT}`, params),
  updateContract: (params, contractId) => axiosClient.put(`${END_POINT_API.NEW_CONTRACT}/${contractId}`, params),
  getContractModificationRequests: () => {
    return axiosClient.get(
      `${END_POINT_API.CONTRACT_REQUEST}?pageSize=100`
    );
  },
  getContractModificationRequestsId: (contractId) => {
    return axiosClient.get(
      `${END_POINT_API.CONTRACT_REQUEST}/${contractId}`
    );
  },
  updateContractModificationRequestId: (params, contractId) => axiosClient.put(`${END_POINT_API.CONTRACT_REQUEST}/${contractId}`, params),
};

export default contractAPI;
