import { http_errors } from "../../util/strings"

const execute404Handler = (props: any) => {
  return {
    code: http_errors.notFound.code,
    type: http_errors.notFound.message,
    props: props
  }
}
const execute500Handler = (props: any) => {
  return {
    code: http_errors.internalError.code,
    type: http_errors.internalError.message,
    props: props
  }
}
const executeOtherErrorHandler = (error: any) => {
  return {
    code: http_errors.otherError.code,
    type: http_errors.otherError.message,
    error: error
  }
}

export const handleHTTPError = (error: any, props: any) => {
  if (error.response.status === 404) {
      return execute404Handler(props);
  }
  else if (error.response.status === 500) {
      return execute500Handler(props);
  }
  else {
      return executeOtherErrorHandler(error);
  }
}