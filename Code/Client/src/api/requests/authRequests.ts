import {noAuthAPI} from '../api';
import {endpoints} from '../../values/endpoints';
import {AxiosResponse} from 'axios';
import {CreateAccountFarmerRequest, CreateAccountFarmerResponse} from '../../model/api/CreateAccountFarmer';
import {useAPI} from '../../hooks/apiHooks';


export const authRequests = {
  refreshToken: (refreshToken: string): Promise<AxiosResponse> => (
    noAuthAPI.post<any>(endpoints.INVALID_REFRESH_TOKEN, {refresh: refreshToken})
  ), //TODO: precise type

  usePostCreateAccountFarmer: ():
    (values: CreateAccountFarmerRequest) => Promise<AxiosResponse<CreateAccountFarmerResponse>> => {
    const api = useAPI()
    return (values) =>
      api(noAuthAPI.post<CreateAccountFarmerResponse>(endpoints.POST_ACCOUNT_REGISTRATION_FARMER, values))
  }
}