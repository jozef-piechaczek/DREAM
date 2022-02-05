export const endpoints = {
  INVALID_REFRESH_TOKEN: "/api/account/token/refresh",
  POST_ACCOUNT_REGISTRATION_FARMER: "/api/account/registration/farmer",
  POST_ACCOUNT_REGISTRATION_POLICY_MAKER: "/api/account/registration/policy-maker",
  POST_ACCOUNT_LOGIN: "/api/account/login",
  GET_MANDALS: "/api/mandals",
  GET_FARMER: "/api/farmer",
  GET_FARMER_DETAIL: "/api/farmer/:id",
  GET_PRODUCTION_DATA: "/api/farmer/:id/farm/production-data",
  GET_FARMER_NOTE: "/api/farmer/:id/note",
  POST_FARMER_NOTE: "/api/farmer/:id/note",
  GET_PROBLEM_TYPE: "/api/problem-type",
  DELETE_ACCOUNT: "/api/account/:id",
  GET_PRODUCTION_TYPES: "/api/farmer/farm/production-data/production-types",
  POST_PRODUCTION_DATA: "/api/farmer/farm/production-data",
  PUT_PRODUCTION_DATA: "/api/farmer/farm/production-data/:id",
  DELETE_PRODUCTION_DATA: "/api/farmer/farm/production-data/:id",
  GET_FARMER_REQUESTS: "/api/requests/?RequestCreatedById=:id",
  GET_REQUESTS_PROVIDE_HELP: "/api/requests/?RecipientUserId=:id",
  GET_FARMER_REQUEST_DETAIL: "/api/requests/:id",
  POST_FARMER_REQUEST: "/api/requests",
  POST_REQUEST_ADVICE: "/api/requests/:id/response",
  GET_FORUM: "/api/forum/thread",
  POST_FORUM: "/api/forum/thread",
  GET_FORUM_DETAIL: "/api/forum/thread/:id",
  POST_FORUM_THREAD_COMMENT: "/api/forum/thread/:id/comment",
  GET_SUGGESTIONS: "/api/suggestion?FarmerId=:id",
}