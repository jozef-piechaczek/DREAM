export interface RequestAdvice {
  id: number;
  message: string;
  createdOn: string;
  helpRequestId: number;
  createdByAgronomist: string | null | undefined;
  createdByFarmer: string | null | undefined;
  createdByFarmerId: number;
}

export interface GetRequestDetailResponse {
  id: number;
  topic: string;
  description: string;
  createdOn: string;
  isAutomatic: false;
  createdBy: string;
  createdById: number;
  helpResponses: RequestAdvice[]
}
