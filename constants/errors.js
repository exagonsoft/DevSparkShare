export const customErrors = {
    resourceDoesNotExist: {
      statusCode: 400,
      message: "😞 Resource does not exist",
      code: "resourceDoesNotExist",
    },
    resourceAlreadyExists: {
      statusCode: 400,
      message: "😕 Resource already exist",
      code: "resourceAlreadyExists",
    },
    wrongCredentials: {
      statusCode: 403,
      message: "😬 Incorrect credentials",
      code: "wrongCredentials",
    },
    invalidToken: {
      statusCode: 403,
      message: "😬 Invalid Token",
      code: "invalidToken",
    },
    systemWriteError: {
      statusCode: 501,
      message: "✏️ System IO write error",
      code: "systemWriteError",
    },
    systemDataBaseError: {
      statusCode: 502,
      message: "💾 System DB error",
      code: "systemDataBaseError",
    },
    systemMailError: {
      statusCode: 502,
      message: "📧 System Email send error",
      code: "systemMailError",
    },
    internalServerError: {
      statusCode: 500,
      message: "😶 Uncontrolled Server Error Encounter",
      code: "internalServerError",
    },
  };
  
  export const errors = {
      resourceDoesNotExist: 'resourceDoesNotExist',
      resourceAlreadyExists: 'resourceAlreadyExists',
      wrongCredentials: 'wrongCredentials',
      invalidToken: 'invalidToken',
      systemWriteError: 'systemWriteError',
      systemDataBaseError: 'systemDataBaseError',
      systemMailError: 'systemMailError',
      internalServerError: 'internalServerError',
  }